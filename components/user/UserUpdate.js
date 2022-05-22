import React from "react";

export function UserUpdate(){
    return (<div align = "middle">
     <h3 >CLOZET 회원정보수정 </h3> 
       <div>
          <div id='signup_section'>
            <div>
              <h5>현재 PW </h5>
              <input type='text' placeholder="현재pw" maxLength='10' name='before_pw'/>
          </div>
          <div>
              <h5>수정 PW </h5>
            <input type='text' placeholder="수정pw" maxLength='10' name='after_pw' />
            <h5>수정 PW 확인 </h5>
              <input type='text' placeholder="수정pw 확인" maxLength='10' name='check_after_pw'/>
            </div>

            <div>
              <h5>수정 닉네임</h5>
            <input type='text' placeholder="수정 닉네임" maxLength='6' name='after_nickname' />
                <button type='button'>중복확인</button>
                        </div>
            <div>
              <h5> 전화번호 변경 </h5>
              <input type='text' maxLength='3' name='signup_phone'/> - 
              <input type='text' maxLength='4' name='signup_phone'/> - 
              <input type='text' maxLength='4' name='signup_phone'/> 
            </div>
            <div>
              <h5> 변경 이메일 </h5>
              <input type='text' placeholder="변경 이메일" maxLength='15' name='signup_email'/> @
              <select name='signup_email_select'>
                <option value='gmail.com'> gmail.com </option>
                <option value='naver.com'> naver.com </option>
                <option value='write'> 직접 입력 </option>
                        </select>
                <button type='button'>인증번호 전송</button>
                <div>
            <input type='text' placeholder="인증번호 확인" maxLength='4' name='checkpw'/> <button type='button'>인증번호 확인</button>
            </div>
            </div>
          </div>
        </div>
        <div>
          <input type='button' value='수정하기' name='sigunup_submit'/>
          <input type='button' value='회원탈퇴' name='sigunup_submit'/>
        </div>
        </div>
    

)
}