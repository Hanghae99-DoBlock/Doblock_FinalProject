import styled, { css } from "styled-components";

const Text = ({ children, ...props }) => {
	return <StText {...props}>{children}</StText>;
};
export default Text;

const StText = styled.span`
	${({ variant }) => {
		switch (variant) {
			case "big":
				return css`
					font-weight: 700;
					font-size: 20px;
				`;
			case "medium":
				return css`
					font-weight: 600;
					font-size: 19px;
					color: #131313;
				`;
			case "grey":
				return css`
					font-weight: 500;
					font-size: 12px;
					color: #979797;
				`;
			case "normal":
				return css`
					font-weight: 500;
					font-size: 15px;
				`;
			default:
				break;
		}
	}}
`;
