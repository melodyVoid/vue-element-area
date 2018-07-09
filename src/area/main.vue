<template>
  <div class="area">
    <el-select v-model="province" placeholder="请选择" @change="changeProvince">
      <el-option :label="value" :value="value" v-for="(value, key) in provinceList" :key="key"></el-option>
    </el-select>

    <el-select v-model="city" placeholder="请选择" @change="changeCity">
      <el-option :label="city" :value="city" v-for="(city, key) in filterCity" :key="key"></el-option>
    </el-select>
    <el-select v-model="town" placeholder="请选择">
      <el-option :label="town" :value="town" v-for="(town, key) in filterTown" :key="key"></el-option>
    </el-select>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import areaData from 'china-area-data'
export default {
  name: 'el-area',
  components: {
    'el-select': Select,
    'el-option': Option
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      province: '',
      city: '',
      town: ''
    }
  },
  computed: {
    provinceList() {
      return areaData[86]
    },
    filterCity() {
      const target = Object.entries(this.provinceList).find(([key, value]) => value === this.province)
      const key = target ? target[0] : ''
      return areaData[key] || []
    },
    filterTown() {
      const target = Object.entries(this.filterCity).find(([key, value]) => value === this.city)
      const key = target ? target[0] : ''
      return areaData[key] || []
    }
  },
  watch: {
    data: {
      handler(newValue) {
        const [province, city, town] = newValue || ['', '', '']
        this.province = province
        this.city = city
        this.town = town
      },
      deep: true
    }
  },
  updated() {
    const data = [this.province, this.city, this.town]
    this.$emit('change', data)
  },
  methods: {
    changeProvince(province) {
      this.city = ''
      this.town = ''
      const cityList = Object.values(this.filterCity)
      if (cityList.length === 1) {
        this.city = cityList[0]
      }
    },
    changeCity(city) {
      this.town = ''
    }
  }
}
</script>

<style scoped>
.area {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.el-select {
  width: 30%;
}
</style>
