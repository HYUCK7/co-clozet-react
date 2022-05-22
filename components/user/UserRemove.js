import React from "react";

export function UserRemove() {
     return(
        <div align = "middle">
            <h2>CLOZET 회원탈퇴</h2>
            <div>
                <label htmlFor='input_id'>비밀번호 : </label>
                <input  placeholder="비밀번호" type='text' name='input_id'   />
            </div>
            <div>
                <label htmlFor='input_pw'>비밀번호확인 : </label>
                <input placeholder="비밀번호 확인" type='password' name='input_pw'  />
             </div>
             <h3>탈퇴시 주의사항</h3>
            <h4> 1. 회원 탈퇴 후 5일 이내 재 로그인 시 탈퇴 취소가 가능합니다.</h4>
<h4>2. 회원 탈퇴 후 5일 뒤에는 모든 회원정보가 삭제 되며 기존아이디는더이상사용불가합니다.</h4>
<h4>3. 게시판의 게시글, 댓글 등의 데이터는 삭제되지 않습니다.</h4>
<h4>4. 회원 탈퇴 후 서비스 사용정보는 5년간 분리 보관됩니다.</h4>
             <h4><input type="checkbox" />안내사항을 모두 확인하였으며, 이에 동의합니다.</h4>
            <div>
                <button type='button'>탈퇴</button>
            </div>
        </div>
    )
}