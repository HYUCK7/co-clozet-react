import Link from "next/Link"
import Image from "next/image";
import styles from '@/styles/Nav.module.css'
export function Header() {
    return (
        <div>
        <hr/>
            <nav className={styles.container} role="navigation">
            
            <ul className={styles.mainmenu}>
                <li><a href='/'>AI</a>
                    <ul className={styles.submenu}>
                        <li><a href="/ai/addCloset">로그인 후 메인화면</a></li>
                        <li><a href="/ai/ootd">로그인 후 메인</a></li>
                    </ul >
                </li>
                <li><a href='/'>People</a> 
                    <ul className={styles.submenu}>
                        <li><a href="/people/addBoard">UPLOAD</a></li>
                        <li><a href="/people/likeList">My Upload</a></li>
                        <li><a href="/people/boardList">Clozet People</a></li>
                        <li><a href="/people/trend">TREND</a></li>
                    </ul>
                </li>
                <li><a href='/'>Clozet</a>
                    <ul className={styles.submenu}>
                        <li><a href='/closet/main'>MAIN</a></li>
                        <li><a href='/closet/top'>TOP</a></li>
                        <li><a href='/closet/bottom'>BOTTOM</a></li>
                        <li><a href="/closet/best">BEST</a></li>
                    
                    </ul>
                </li>
                <li> <a href='/'>MYPAGE</a>
                    <ul className={styles.submenu}>
                        <li><a href='/mypage/myOotd'>OOTD</a></li>
                        <li><a href='/mypage/thisweek'>THISWEEK</a></li>
                        <li><a href='/mypage/lastweek'>LASTWEEK</a></li>
                    </ul>
                </li>
                <li><a>USER</a>
                    <ul className={styles.submenu}>
                        <li ><a href='/user/login' aria-label="submenu">로그인</a></li>
                        <li ><a href='/user/register' aria-label="submenu">회원가입</a></li>
                        <li ><a href='/user/userRemove' aria-label="submenu">회원정보삭제</a></li>
                        <li ><a href='/user/userUpdate' aria-label="submenu">회원정보수정</a></li>
                        <li ><a href='/user/findId' aria-label="submenu">아이디찾기</a></li>
                        <li ><a href='/user/findPw' aria-label="submenu">비밀번호찾기</a></li>
                    </ul>
                </li>
            </ul>
            <a href="/"><img className = {styles.img} src="clozet-black.png" width={100} height={50} ></img></a>
            </nav>
            <hr/>
            </div>

    )
}