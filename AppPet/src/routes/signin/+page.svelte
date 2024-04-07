<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!DOCTYPE html>
<html>
	<head>
		<title>Sign in</title>
		<link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="Web nuôi thú cưng" content="Nuôi thú cưng cùng nhau" />

		<style>
			@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);

			* {
				box-sizing: border-box;
			}

			body {
				display: flex;

				flex-direaction: column;
				justify-content: center;
				align-items: center;

				margin: 0;
				min-height: 100vh;
				background: #3498db;
				font-family: 'Open Sans';
			}

			#signin {
				border-style: solid;
				padding: 1em;
				margin: 1em;
				width: 25em;
				border-radius: 1em;
				text-align: center;
				background: #fde3c8;
				color: rgba(0, 0, 0, 0.75);

				h1,
				.button_submit {
					font-weight: 300;
					text-transform: uppercase;
				}

				.error {
					background: rgba(255, 0, 0, 0.4);
					color: white;
					text-shadow: 0 1px 0 rgba(255, 100, 100, 0.75);

					margin-left: -1em;
					margin-right: -1em;
					margin-bottom: 1ex;

					padding: 1ex;

					border-top: 1px solid rgba(255, 100, 100, 0.75);
					border-bottom: 1px solid rgba(255, 100, 100, 0.75);
				}

				input,
				.button_submit {
					display: block;
					width: 100%;

					text-align: center;
					font-size: 1.1em;
					padding: 1ex;
					border: 2px solid #ecf0f1;
					transition: border ease 500ms;
					border-radius: 1ex;
					font-family: 'Open Sans';
					background: #ecf0f1;
					color: #181818;

					&:focus {
						outline: none;
						border: 2px solid #3498db;
					}

					&:not(:last-child) {
						margin-bottom: 1ex;
					}
				}

				.signup-fogotpass {
					display: flex;
					justify-content: space-between;
					margin-bottom: 1ex;

					button {
						padding: 1ex;
						border: 2px solid #ecf0f1;
						transition: border ease 500ms;
						border-radius: 1ex;
						font-family: 'Open Sans';
						background: #ecf0f1;
						color: #181818;

						&:hover {
							outline: none;
							border: 2px solid #3498db;
							background: #3498db;
						}
					}
				}

				.button_submit {
					color: white;
					background: #ff7e6b;

					&:hover {
						outline: none;
						border: 2px solid #3498db;
						background: #3498db;
					}
				}
			}

			body {
				background-image: url('https://png.pngtree.com/background/20210711/original/pngtree-animal-pet-background-material-picture-image_1081234.jpg');
				background-repeat: no-repeat;
				background-attachment: fixed;
				background-size: 100% 100%;
			}
		</style>
	</head>

	<body>
		<div id="signin">
			<h1><b>Sign in</b></h1>
			<div class="error">Oh no, an error occured!</div>
			<form>
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<div class="signup-fogotpass">
					<button type="button" class="open-button">Sign up</button>
					<button type="button" class="open-button">Forget password</button>
				</div>

				<button type="submit" class="button_submit">Sign in</button>
			</form>
		</div>
	</body>
</html>
