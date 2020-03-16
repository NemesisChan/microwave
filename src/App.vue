<template>
  <div id="app">
    <p>電子レンジ加熱時間おしえて君</p>
    <div>
      <select id="watt">
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">700</option>
        <option value="800">800</option>
        <option value="900">900</option>
        <option value="1000">1000</option>
        <option value="1200">1200</option>
        <option value="1500">1500</option>
      </select>Wで
      <input type="text" id="minute" v-model="defaultMinute" />分
      <input type="text" id="second" v-model="defaultSecond" />秒
    </div>
    <br />
    <div>
      800Wで
      分
      秒 加熱
      1200Wで
      分
      秒
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultWatt: "500",
      defaultMinute: "3",
      defaultSecond: "00",
      msg: "Hello World!"
    };
  },
  methods: {
    calculate: function() {}
  }
};
</script>