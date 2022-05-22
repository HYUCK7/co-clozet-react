import React from "react";
import tableStyles from '@/styles/Table.module.css'

const date = new Date();

export function LastWeek(){
    return (
      <>
      <h1 className={tableStyles.h1}> 한성수님의 {date.getFullYear()}-{date.getMonth()}-{date.getDate()-7} ~{date.getFullYear()}-{date.getMonth()}-{date.getDate()-1} WEEK</h1> 
      <button className={tableStyles.button}> THIS WEEK</button>
          <table border="1" table className={tableStyles.table}>
          <thead>
            <tr>
              <th>{date.getMonth()}월 {date.getDate()-7}일</th>
              <th>{date.getMonth()}월 {date.getDate()-6}일</th>
              <th>{date.getMonth()}월 {date.getDate()-5}일</th>
              <th>{date.getMonth()}월 {date.getDate()-4}일</th>
              <th>{date.getMonth()}월 {date.getDate()-3}일</th>
              <th>{date.getMonth()}월 {date.getDate()-2}일</th>
              <th>{date.getMonth()}월 {date.getDate()-1}일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td><img src="https://img.gqkorea.co.kr/gq/2015/12/style_566644d1e72a9.jpg" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520104404_7911aad7.webp" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://img.alicdn.com/imgextra/i3/3309079773/O1CN01dAjOlp2M45N5r3QbT_!!3309079773.jpg" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://img.alicdn.com/imgextra/i3/3309079773/O1CN01dAjOlp2M45N5r3QbT_!!3309079773.jpg" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://img.alicdn.com/imgextra/i3/3309079773/O1CN01dAjOlp2M45N5r3QbT_!!3309079773.jpg" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://img.alicdn.com/imgextra/i3/3309079773/O1CN01dAjOlp2M45N5r3QbT_!!3309079773.jpg" width="200" height="200" alt="My Image"/></td>
                <td><img src="https://img.gqkorea.co.kr/gq/2015/12/style_566644d1e72a9.jpg" width="200" height="200" alt="My Image"/></td>
            </tr>
            <tr>
            <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
            </tr>
            <tr>
            <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
            </tr>
            <tr>
            <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
            </tr>
            <tr>
            <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
              <td>image</td>
            </tr>
            <tr>
            <td><button >Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
              <td><button>Best</button></td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
