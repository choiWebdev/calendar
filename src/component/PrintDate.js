import "./PrintDate.css";

export default function PrintDate() {

  // 현재 날짜 받아오기
  const nowTime = new Date();

  // 올해
  const nowYear = nowTime.getFullYear();

  // 이번 달
  const nowMonth = nowTime.getMonth();

  // 오늘 일자
  const nowDate = nowTime.getDate();

  // 오늘 요일
  let nowDay = nowTime.getDay();
  switch(nowTime.getDay()){
    case 0: 
      nowDay = "일";
      break;
    case 1:
      nowDay = "월";
      break;
    case 2:
      nowDay = "화";
      break;
    case 3:
      nowDay = "수";
      break;
    case 4:
      nowDay = "목";
      break;
    case 5:
      nowDay = "금";
      break;
    case 6: 
      nowDay = "토";
      break;
    defualt:
      nowDay = "월";
      break;
  }

  console.log(nowDay);

  return (
    <>
      <p className="txt_year">{`${nowYear}년 ${nowMonth}월 ${nowDate}일 (${nowDay}요일)`}</p>
    </>
  )
};
