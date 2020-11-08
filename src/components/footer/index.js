import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';

// Custom import
import { FooterStyle } from './style';

const Footer = () => {
	return (
		<FooterStyle>
			<div className="container">
				<div>
					<h2>Contact with us</h2>
					<p>
						Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet.
					</p>
				</div>
				<nav>
					<ul>
						<li>
							<span className="icon">
								<AiFillPhone size="20px" />
							</span>
							<span className="label">PHONE</span>
							<span className="value">+61 (0) 3 8376 6284</span>
						</li>
						<li>
							<span className="icon">
								<IoMdMail size="20px" />
							</span>
							<span className="label">E-MAIL</span>
							<span className="value">noreply@envato.com</span>
						</li>
						<li>
							<span className="icon">
								<FaFacebookF size="20px" />
							</span>
							<span className="label">SOCIAL MEDIA</span>
							<span className="value">
								<a href="https://www.facebook.com/">Facebook</a>
							</span>
						</li>
						<li>
							<span className="icon-chat">
								<BsFillChatFill size="20px" />
							</span>
							<span className="label">CHAT</span>
							<span className="value">Chat with us</span>
						</li>
					</ul>
				</nav>
			</div>
		</FooterStyle>
	)
}

export default Footer;
