import React from "react";
import tableStyles from '@/styles/Table.module.css'
const date = new Date();
const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
const dayofweek = week[date.getDay()]

export function MyOotd(){

    return(
    <>
    <h1 className={tableStyles.h1}>한성수님의 OOTD {date.getFullYear()}-{date.getMonth()}-{date.getDate()} {dayofweek}</h1>
    <select name='컨셉' className={tableStyles.button}>
                <option value='소개팅'> 소개팅 </option>
                <option value='결혼식'> 결혼식 </option>
                <option value='장례식'> 장례식 </option>
              </select>
    <table table className={tableStyles.table}>
        <tr>
        <td><img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520104404_7911aad7.webp" width="200" height="200" alt="My Image"/></td>
        <td><img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520110209_03b059a0.webp" width="200" height="200" alt="My Image"/></td>
        <td><img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520112658_78365a06.webp" width="200" height="200" alt="My Image"/></td>
        </tr>
    </table>
    <button className={tableStyles.button}>BEST</button>
        
    
    </>

)
}
