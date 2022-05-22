import React from "react";

export function Register() { 
    return (
         <div align = "middle">
        <div>
          <h3 id='signup_title'>CLOZET 회원가입</h3>
        </div>
        <div className='Signup'>
          <div>
            <div>
              <h5> 아이디 </h5>
              <input placeholder="아이디" type='text' maxLength='20' name='signup_id'/>
            </div>

            <div>
              <h5> 비밀번호 </h5>
              <input placeholder="비밀번호" type='password' maxLength='15' name='signup_password'/>
            </div>

            <div>
              <h5> 비밀번호 확인 </h5>
              <input placeholder="비밀번호 확인" type='password' maxLength='15' name='signup_pswCheck'/>
            </div>
          </div>

          <div id='signup_section'>
            <div>
              <h5> 이름 </h5>
              <input  type='text' placeholder="이름" maxLength='10' name='signup_name'/>
            </div>
            <div>
              <h5> 닉네임 </h5>
              <input type='text' placeholder="닉네임" maxLength='10' name='signup_name'/>
            </div>
             <div>
              <h5> 키 </h5>
              <input type='text' placeholder="cm" maxLength='10' name='height'/>
            </div>
             <div>
              <h5> 몸무게 </h5>
              <input type='text' placeholder="kg" maxLength='10' name='weight'/>
            </div>

            <div>
              <h5> 생년월일 </h5>
              <input type='text' placeholder="6자" maxLength='6' name='signup_birthday'/> - 
              <input type='text' placeholder="1자" maxLength='1' name='signup_sex'/> ******
            </div>
            <div>
              <h5> 전화번호 </h5>
              <input type='text' maxLength='3' name='signup_phone'/> - 
              <input type='text' maxLength='4' name='signup_phone'/> - 
              <input type='text' maxLength='4' name='signup_phone'/> 
            </div>
            <div>
              <h5> 이메일 </h5>
              <input type='text' placeholder="이메일" maxLength='15' name='signup_email'/> @
              <select name='signup_email_select'>
                <option value='gmail.com'> gmail.com </option>
                <option value='naver.com'> naver.com </option>
                <option value='write'> 직접 입력 </option>
              </select>
               <button type='button'>인증번호 전송</button>
                             <input type='text' placeholder="인증번호 확인" maxLength='4' name='checkpw'/> <button type='button'>인증번호 확인</button>
                     </div>
          </div>
        </div>

        <div>
          <input type='button' value='가입하기' name='sigunup_submit'/>
        </div>
      </div>
    )
}