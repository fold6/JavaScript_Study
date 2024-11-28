import img01 from './01.jpg';
import img02 from './02.jpg';
import img03 from './03.jpg';
import './App.css';

function App() {
  return (
    <div>
      {/* 이미지 삽입방법 1 */}
      <img src={img01} alt="이미지1"/>
      <img src={img02} alt="이미지2"/>
      <img src={img03} alt="이미지3"/>

      {/* 이미지 삽입방법 2 */}
      <img src={require('./images/01.jpg')} alt="이미지1"/>
      <img src={require('./images/02.jpg')} alt="이미지2"/>
      <img src={require('./images/03.jpg')} alt="이미지3"/>
      {/* require : 이미지나 동적 파일 로딩에 사용
      React에서 이미지 경로를 문자열로 동적으로 생성하거나 특정 조건에 따라 이미지를 가져올 때 require를 사용해야 함.
       */}

      {/* 이미지 삽입방법 3 */}
      <img src={"./images/01.jpg"} alt="이미지1"/>
      <img src={"./images/02.jpg"} alt="이미지2"/>
      <img src={"./images/03.jpg"} alt="이미지3"/>
    </div>
  );
}

export default App;
