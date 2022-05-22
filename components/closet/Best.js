import React from "react";
import tableStyles from '@/styles/Table.module.css'

export function Best() {

    return (
        <table className={tableStyles.table}>
            <tbody>

                <tr>
                    <td>
                        <label>2022/7/23 ootd</label>
                    </td>
                    <td>
                        <img
                            style={{
                                width: 150
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilLR0ZqU6k_w-rzpQjT1RMMSS2k4iSTAC1g&usqp=CAU"
                            alt="logo"/>
                    </td>
                    <td>
                        <img
                            style={{
                                width: 150
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTkvZDaIYM2XJKvhTrk4bj_bssBfYc-04pw&usqp=CAU"
                            alt="logo"/>
                    </td>
                    <td>
                        <img
                            style={{
                                width: 150
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2A-nuXYWoVhLZlO5-Ha4RxgKR3SdHIuE8oA&usqp=CAU"
                            alt="logo"/>
                    </td>
                    <td>
                        <img
                            style={{
                                width: 150
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySjzSeGP64agOMZKe5eYd9s5W4vchm8ZnUQ&usqp=CAU"
                            alt="logo"/>
                    </td>
                    <td>
                        <label><input type="submit" value="삭제"/></label>
                    </td>
                </tr>

                <tr>
                    <td>
                        <label>2022/6/30 ootd</label>
                    </td>
                    <td>
                        <img
                            style={{
                                width: 150
                            }}
                            src="https://www.siminilbo.co.kr/news/data/20151211/p179552994522588_213.jpg"
                            alt="logo"/>
                    </td>
                    <td>
                        <img
                            style={{
                                width: 150
                            }}
                            src="http://ccimg.hellomarket.com/images/2018/item/s9/02/03/12/3154_2767656_1.jpg?size=s6"
                            alt="logo"/>
                    </td>
                    <td>
                        <img
                            style={{
                                width: 150
                            }}
                            src="https://www.elandrs.com/upload/prd/img/666/600/1905492666_0000001.jpg"
                            alt="logo"/>
                    </td>
                    <td>
                        <img
                            style={{
                                width: 150
                            }}
                            src="https://static.coupangcdn.com/image/retail/images/2020/01/28/17/8/c575af26-aace-474f-b290-14d8abdae656.jpg"
                            alt="logo"/>
                    </td>
                    <td>
                        <label><input type="submit" value="삭제"/></label>
                    </td>
                </tr>

            </tbody>
        </table>

    )
}