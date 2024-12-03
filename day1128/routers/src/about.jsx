import React from 'react';
import qs from 'qs'

const About = ({location}) => {
    // props 전달되는 location객체에 있는 search값에서 데이터를 읽을 수 있음
    // (location안에는 현재 앱이 갖고 있는 주소에 대한 정보)
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = query.detail === 'true';

    return (
        <div>
             <h1>소개</h1>
            <p>리액트 라우터를 공부하고 있어요</p>
            {(true) && <p>01추가적인 정보가 어쩌고 저쩌고..</p>}
            { detail && <p>02추가적인 정보가 어쩌고 저쩌고..</p>}
        </div>
    );
};

export default About;