function timeSettingForm() {
  const clockSetting = new Date();
  const thisHours = clockSetting.getHours().toString().padStart(2, "0");
  const thisMinutes = clockSetting.getMinutes().toString().padStart(2, "0");
  const thisSeconds = clockSetting.getSeconds().toString().padStart(2, "0");
  const thisYear = clockSetting.getFullYear();
  const thisMonth = clockSetting.getMonth(); // 0 ~ 11
  const thisDate = clockSetting.getDate();
  const thisDay = clockSetting.getDay(); // Sun Mon Tue Wed Thu Fri Sat

  // 결과를 객체로 반환
  return {
    clockSetting,
    thisHours,
    thisMinutes,
    thisSeconds,
    thisYear,
    thisMonth,
    thisDate,
    thisDay,
  };
}
