import tableStyles from '@/styles/Table.module.css'
import React from "react";

export function Add() {
    return (

        <div>
            한성수님의 옷 추가
            <table className={tableStyles.table}>

                <tbody>
                    <tr>
                        <td>
                            <img
                                style={{
                                    width: 180
                                }}
                                src="https://www.elandrs.com/upload/prd/img/666/600/1905492666_0000001.jpg"
                                alt="logo"/>
                        </td>
                    </tr>
                    <label><input type="submit" value="추가하기"/></label>

                </tbody>
            </table>
        </div>
    )
}