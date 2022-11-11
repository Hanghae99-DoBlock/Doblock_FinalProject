import styled from "styled-components";
import Button from "../../common/button/Button";
import Flex from "../../common/flex/Flex";
import { StInput } from "../../common/input/Input";
import chevron from "../../images/chevron.left.svg"
import useMediaQuery from 'react-responsive'
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect"
import { useState } from "react";
import useInput from "../../common/hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __signIn } from "../../redux/modules/joinSlice";




const SignInPage = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [passwordType,setPasswordType] = useState({
		type : "password",
		visible : false
	})
	const email = useInput('')
	const password = useInput('')
	console.log(email.value)
	console.log(password.value)

	//password type 변경하는 함수
	const passwordTypeHandler = e => {
		setPasswordType(() => {
			if (!passwordType.visible) {
				return { type: 'text', visible: true };
			}
			return { type: 'password', visible: false };
		})
	}

	const loginHandler = () =>{
		dispatch(__signIn({email : email.value, password : password.value}))
		navigate("/")
	}
	
	return (
		
		<>
		<Flex dir="column" mw="375px" mxw="375px" mh="667px" mg="0 auto">
			<Flex dir="row" ht="58px" jc="center" pd="8px 0" ai="center">
					<Flex fs="18" ai="center" jc="center">
						로그인
					</Flex>
			</Flex>
			<Flex ht="98px" jc="center" ai="center" mg="0 0 9px 0">
				<Flex wd="125px" ht="60px" bg="#C2C2C2" mg="6px 0 0 0">
					LOGO
				</Flex>
			</Flex>
			<Flex ht="102px" dir="column" ai="center" pd="0 20px 20px" gap="6px">
				<Flex wd="335px" ht="26px" fw="600" fs="14" lh="26" jc="flex-start">
					이메일
				</Flex>
				<StEmail>
					<StInput value={email.value} onChange={email.onChange} type="text" variant="join" placeholder="이메일을 입력하세요"/>
					<Flex wd="24px" ht="24px" mg="0 13px 0 0">
					{email.value.trim() === ''? null :<svg onClick={email.onReset} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.023 3 3 7.023 3 12C3 16.977 7.023 21 12 21C16.977 21 21 16.977 21 12C21 7.023 16.977 3 12 3ZM12 19.2C8.031 19.2 4.8 15.969 4.8 12C4.8 8.031 8.031 4.8 12 4.8C15.969 4.8 19.2 8.031 19.2 12C19.2 15.969 15.969 19.2 12 19.2ZM12 10.731L15.231 7.5L16.5 8.769L13.269 12L16.5 15.231L15.231 16.5L12 13.269L8.769 16.5L7.5 15.231L10.731 12L7.5 8.769L8.769 7.5L12 10.731Z" fill="#7474FF"/>
					</svg>}
					</Flex>
				</StEmail>
			</Flex>
			<Flex wd="100%" ht="100%" dir="column" ai="center" pd="0 20px 20px" gap="6px" position="relative">
				<Flex wd="335px" ht="26px" fw="600" fs="14" lh="26" jc="flex-start">
					비밀번호
				</Flex>
				<StPassword>
					<StInput type={passwordType.type} value={password.value} onChange={password.onChange} variant="join" placeholder="비밀번호를 입력하세요"/>
					<Flex wd="24px" ht="24px" mg="0 13px 0 0">
						{passwordType.visible === false ? <svg onClick={passwordTypeHandler} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.3281 19.1328C13.0469 19.1328 13.737 19.0729 14.3984 18.9531C15.0599 18.8385 15.6901 18.6797 16.2891 18.4766L15.0469 17.2266C14.6198 17.3464 14.1797 17.4427 13.7266 17.5156C13.2786 17.5885 12.8125 17.625 12.3281 17.625C11.4948 17.625 10.6953 17.5234 9.92969 17.3203C9.16927 17.1172 8.45573 16.8464 7.78906 16.5078C7.1224 16.1693 6.51823 15.8021 5.97656 15.4062C5.4401 15.0052 4.97656 14.6094 4.58594 14.2188C4.19531 13.8229 3.89323 13.4609 3.67969 13.1328C3.47135 12.8047 3.36719 12.5495 3.36719 12.3672C3.36719 12.237 3.44792 12.0443 3.60938 11.7891C3.77083 11.5286 4.0026 11.2318 4.30469 10.8984C4.60677 10.5651 4.96875 10.2214 5.39062 9.86719C5.81771 9.50781 6.29948 9.16406 6.83594 8.83594L5.65625 7.65625C5.02083 8.0625 4.45052 8.49219 3.94531 8.94531C3.4401 9.39323 3.01302 9.83594 2.66406 10.2734C2.3151 10.7057 2.04948 11.1068 1.86719 11.4766C1.6849 11.8411 1.59375 12.138 1.59375 12.3672C1.59375 12.6328 1.71094 12.9844 1.94531 13.4219C2.1849 13.8542 2.52604 14.3255 2.96875 14.8359C3.41667 15.3411 3.95573 15.8464 4.58594 16.3516C5.22135 16.8568 5.9375 17.3203 6.73438 17.7422C7.53125 18.1589 8.39844 18.4948 9.33594 18.75C10.2786 19.0052 11.276 19.1328 12.3281 19.1328ZM12.3281 5.60938C11.6458 5.60938 10.9948 5.66406 10.375 5.77344C9.75521 5.88281 9.15885 6.03125 8.58594 6.21875L9.83594 7.46875C10.2318 7.35938 10.6354 7.27344 11.0469 7.21094C11.4583 7.14323 11.8854 7.10938 12.3281 7.10938C13.1615 7.10938 13.9583 7.21615 14.7188 7.42969C15.4844 7.64323 16.2005 7.92448 16.8672 8.27344C17.5339 8.61719 18.1354 8.99219 18.6719 9.39844C19.2135 9.80469 19.6797 10.2083 20.0703 10.6094C20.4609 11.0052 20.7604 11.3594 20.9688 11.6719C21.1823 11.9844 21.2891 12.2161 21.2891 12.3672C21.2891 12.5234 21.2109 12.7318 21.0547 12.9922C20.9036 13.2526 20.6849 13.5443 20.3984 13.8672C20.112 14.1849 19.7682 14.513 19.3672 14.8516C18.9661 15.1901 18.5156 15.5182 18.0156 15.8359L19.1797 17C19.7891 16.599 20.3333 16.1771 20.8125 15.7344C21.2969 15.2865 21.7057 14.8516 22.0391 14.4297C22.3724 14.0026 22.625 13.6094 22.7969 13.25C22.974 12.8906 23.0625 12.5964 23.0625 12.3672C23.0625 12.1016 22.9453 11.7526 22.7109 11.3203C22.4818 10.888 22.1458 10.4193 21.7031 9.91406C21.2604 9.40365 20.724 8.89583 20.0938 8.39062C19.4688 7.88542 18.7578 7.42448 17.9609 7.00781C17.1641 6.58594 16.2917 6.2474 15.3438 5.99219C14.401 5.73698 13.3958 5.60938 12.3281 5.60938ZM12.3281 16.5781C12.6302 16.5781 12.9219 16.5443 13.2031 16.4766C13.4896 16.4036 13.7604 16.3099 14.0156 16.1953L8.49219 10.6641C8.36719 10.9245 8.27083 11.1979 8.20312 11.4844C8.14062 11.7708 8.10938 12.0651 8.10938 12.3672C8.10938 12.9401 8.21615 13.4818 8.42969 13.9922C8.64844 14.4974 8.95052 14.9453 9.33594 15.3359C9.72135 15.7214 10.1693 16.026 10.6797 16.25C11.1901 16.4688 11.7396 16.5781 12.3281 16.5781ZM16.2266 13.875C16.3307 13.6458 16.4089 13.4036 16.4609 13.1484C16.5182 12.8932 16.5469 12.6328 16.5469 12.3672C16.5469 11.7839 16.4375 11.237 16.2188 10.7266C16 10.2161 15.6979 9.77083 15.3125 9.39062C14.9271 9.00521 14.4792 8.70573 13.9688 8.49219C13.4583 8.27344 12.9141 8.16406 12.3359 8.16406C12.0651 8.16406 11.8021 8.1901 11.5469 8.24219C11.2917 8.29427 11.0495 8.36979 10.8203 8.46875L16.2266 13.875ZM18.4922 19.2656C18.612 19.3906 18.7578 19.4531 18.9297 19.4531C19.1016 19.4583 19.2474 19.3958 19.3672 19.2656C19.4974 19.1354 19.5599 18.987 19.5547 18.8203C19.5547 18.6536 19.4922 18.5078 19.3672 18.3828L6.13281 5.15625C6.01823 5.03646 5.8724 4.97656 5.69531 4.97656C5.51823 4.97656 5.36979 5.03646 5.25 5.15625C5.13021 5.27604 5.07031 5.42448 5.07031 5.60156C5.07031 5.77344 5.13021 5.91927 5.25 6.03906L18.4922 19.2656Z" fill="#C8C8C8"/>
						</svg> : <svg  onClick={passwordTypeHandler} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.3281 19.1328C13.3958 19.1328 14.401 19.0052 15.3438 18.75C16.2917 18.4948 17.1641 18.1589 17.9609 17.7422C18.7578 17.3203 19.4688 16.8568 20.0938 16.3516C20.724 15.8464 21.2604 15.3411 21.7031 14.8359C22.1458 14.3255 22.4818 13.8542 22.7109 13.4219C22.9453 12.9844 23.0625 12.6328 23.0625 12.3672C23.0625 12.1016 22.9453 11.7526 22.7109 11.3203C22.4818 10.888 22.1458 10.4193 21.7031 9.91406C21.2604 9.40365 20.724 8.89583 20.0938 8.39062C19.4688 7.88542 18.7552 7.42448 17.9531 7.00781C17.1562 6.58594 16.2865 6.2474 15.3438 5.99219C14.401 5.73698 13.3958 5.60938 12.3281 5.60938C11.2812 5.60938 10.2865 5.73698 9.34375 5.99219C8.40625 6.2474 7.53906 6.58594 6.74219 7.00781C5.94531 7.42448 5.22917 7.88542 4.59375 8.39062C3.95833 8.89583 3.41667 9.40365 2.96875 9.91406C2.52604 10.4193 2.1849 10.888 1.94531 11.3203C1.71094 11.7526 1.59375 12.1016 1.59375 12.3672C1.59375 12.6328 1.71094 12.9844 1.94531 13.4219C2.1849 13.8542 2.52604 14.3255 2.96875 14.8359C3.41667 15.3411 3.95573 15.8464 4.58594 16.3516C5.22135 16.8568 5.9375 17.3203 6.73438 17.7422C7.53125 18.1589 8.39844 18.4948 9.33594 18.75C10.2786 19.0052 11.276 19.1328 12.3281 19.1328ZM12.3281 17.625C11.4948 17.625 10.6953 17.5234 9.92969 17.3203C9.16927 17.1172 8.45573 16.8464 7.78906 16.5078C7.1224 16.1693 6.51823 15.8021 5.97656 15.4062C5.4401 15.0052 4.97656 14.6094 4.58594 14.2188C4.19531 13.8229 3.89323 13.4609 3.67969 13.1328C3.47135 12.8047 3.36719 12.5495 3.36719 12.3672C3.36719 12.2161 3.47135 11.9844 3.67969 11.6719C3.89323 11.3594 4.19531 11.0052 4.58594 10.6094C4.97656 10.2083 5.4401 9.80469 5.97656 9.39844C6.51823 8.99219 7.1224 8.61719 7.78906 8.27344C8.45573 7.92448 9.16927 7.64323 9.92969 7.42969C10.6953 7.21615 11.4948 7.10938 12.3281 7.10938C13.1615 7.10938 13.9583 7.21615 14.7188 7.42969C15.4792 7.64323 16.1927 7.92448 16.8594 8.27344C17.526 8.61719 18.1302 8.99219 18.6719 9.39844C19.2135 9.80469 19.6797 10.2083 20.0703 10.6094C20.4609 11.0052 20.7604 11.3594 20.9688 11.6719C21.1823 11.9844 21.2891 12.2161 21.2891 12.3672C21.2891 12.5495 21.1823 12.8047 20.9688 13.1328C20.7604 13.4609 20.4609 13.8229 20.0703 14.2188C19.6797 14.6094 19.2135 15.0052 18.6719 15.4062C18.1302 15.8021 17.526 16.1693 16.8594 16.5078C16.1927 16.8464 15.4792 17.1172 14.7188 17.3203C13.9583 17.5234 13.1615 17.625 12.3281 17.625ZM12.3359 16.5781C12.9141 16.5781 13.4583 16.4688 13.9688 16.25C14.4792 16.026 14.9271 15.7214 15.3125 15.3359C15.6979 14.9453 16 14.4974 16.2188 13.9922C16.4375 13.4818 16.5469 12.9401 16.5469 12.3672C16.5469 11.7839 16.4375 11.237 16.2188 10.7266C16 10.2161 15.6979 9.77083 15.3125 9.39062C14.9271 9.00521 14.4792 8.70573 13.9688 8.49219C13.4583 8.27344 12.9141 8.16406 12.3359 8.16406C11.7422 8.16406 11.1901 8.27344 10.6797 8.49219C10.1693 8.70573 9.72135 9.00521 9.33594 9.39062C8.95052 9.77083 8.64844 10.2161 8.42969 10.7266C8.21615 11.237 8.10938 11.7839 8.10938 12.3672C8.10938 12.9401 8.21875 13.4818 8.4375 13.9922C8.65625 14.4974 8.95833 14.9453 9.34375 15.3359C9.72917 15.7214 10.1745 16.026 10.6797 16.25C11.1901 16.4688 11.7422 16.5781 12.3359 16.5781ZM12.3281 13.7344C11.9479 13.7344 11.625 13.599 11.3594 13.3281C11.0938 13.0573 10.9609 12.737 10.9609 12.3672C10.9609 11.9922 11.0938 11.6719 11.3594 11.4062C11.625 11.1406 11.9479 11.0078 12.3281 11.0078C12.7031 11.0078 13.0234 11.1406 13.2891 11.4062C13.5599 11.6719 13.6953 11.9922 13.6953 12.3672C13.6953 12.737 13.5599 13.0573 13.2891 13.3281C13.0234 13.599 12.7031 13.7344 12.3281 13.7344Z" fill="#7474FF"/>
						</svg>}

					</Flex>
				</StPassword>
				
			</Flex>
			<Flex gap="16px" jc="center" ai="center" dir="column">
				<Flex jc="center" ai="center">
					<Button onClick={loginHandler} variant="join">
						로그인하기
					</Button>
				</Flex>
				<Flex jc="center" ai="center">
					<Button onClick={()=>navigate("/signup")} variant="join" style={{backgroundColor : "white", color : "#7474FF"}}>
						회원가입하기
					</Button>
				</Flex>
			</Flex>
		</Flex>
		</>
	);
};

export default SignInPage;

const StEmail = styled.div`
	display: flex;
	flex-direction: row;
	width:335px;
	background-color: #F4F4F4;
	align-items: center;
	border-radius: 10px;

	:focus-within{
		outline : 1px solid #7474FF
	}

`;

const StPassword = styled.div`
		display: flex;
	flex-direction: row;
	width:335px;
	background-color: #F4F4F4;
	align-items: center;
	border-radius: 10px;

	:focus-within{
		outline : 1px solid #7474FF
	}

`;
