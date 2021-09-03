import React from 'react'	//importa funções do React (useSate; useEffect, etccc)

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import nookies from 'nookies'		//biblioteca utilizada para salvar cookies
import jwt from 'jsonwebtoken'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileReations } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBox } from '../src/components/ProfileRelations'

function ProfileSideBar(props) {	
	//console.log("props = ", props)
	const githubUserProfile = props
	//console.log(githubUser)
	return (
		<>
			<Box as="aside">
				<img src={`https://github.com/${props.user.name}.png`} alt="profilepic" />
				<hr />
				<a className="boxLink" href={`https://github.com/${props.user.name}`} target="_blank"> 
					@{props.user.name}
				</a>
				<p className="bioProfile">{props.user.bio}</p>
				<hr />
				<AlurakutProfileSidebarMenuDefault />
			</Box>
		</>
	)
}

export default function Home(props) {
	const githubUser = {
		name: props.githubUser,
		bio: props.bio
	}
	
	const [favDevelopers, setFavDevelopers] = React.useState([]);

	const [comunidades, setComunidades] = React.useState([]);
	React.useEffect(function () {
		//API Github
		fetch("https://api.github.com/users/vieiramanda/following")
		.then(function (responseAPI) {
			return responseAPI.json()
		})
		.then(function (responseComplete) {			
			console.log("response complete: ", responseComplete)
			setFavDevelopers(responseComplete)
			console.log("fav devs 2= ", favDevelopers)
		})

		//APÍ GraphQL - parametros: URL request / config object
		//src: https://www.datocms.com/docs/content-delivery-api/your-first-request
		fetch('https://graphql.datocms.com/', {
				method : 'POST',
				headers : {
					'Authorization': '13ed9022fe1b830f4b22f95c8f24f1',
					'Content-type' : 'application/json',
					'Accept': 'application/json',
				},
				//--data-binary '{ "query": "query { allPosts { title } }" }'
				body: JSON.stringify({ "query": `query {
					allCommunities {
						id
						title
						imageUrl
						creatorSlug
					}  
				}`	})
		})
		.then((response) => response.json())	// Pega o retorno do response.json() e já retorna
		.then((responseComplete) => {
			//console.log('responseComplete: ', responseComplete);
			const communitiesFromDato = responseComplete.data.allCommunities;
			//console.log('communitiesFromDato : ', communitiesFromDato);
			setComunidades(communitiesFromDato);
		})

	}, [])

	return (
		<>
			<AlurakutMenu user={githubUser}/>
			<MainGrid>
				<div className="profileArea" style={{ gridArea: 'profileArea' }} >
					<ProfileSideBar user={githubUser} />
				</div>
				<div className="welcomeArea" style={{ gridArea: 'welcomeArea' }} >
					<Box>
						<h1 className="title">Bem-vinde!</h1>
						<OrkutNostalgicIconSet />
					</Box>
					<Box>
						<h2 className="subtitle">O que você deseja fazer?</h2>
						<form onSubmit={
							function handleCriaComunidade(e) {
								e.preventDefault()								
								const dataForm = new FormData(e.target)
								//console.log("input:", dataForm.get('title'))
								//console.log("input:", dataForm.get('image'))
								const comunidade = {								
									title : dataForm.get('title'),
									imageUrl : dataForm.get('image'),
									creatorSlug : 'omariosouto'
								}
								fetch('/api/communities', {
									method : 'POST',
									headers : {
										'Content-type': 'application/json'
									},
									body : JSON.stringify(comunidade)
								})
								.then(async (response) => {
									const data = await response.json()
									console.log(data.modelCreated)
									const newCommunity = data.modelCreated
									setComunidades([...comunidades, newCommunity]) //...spread
									
								})
								//console.log(comunidades)
								document.getElementById("comunityName").value = ""
								document.getElementById("comunityImage").value = ""
							}}>

							<div>
								<input type="text" name="title" id="comunityName" aria-label="Qual vai ser o nome da sua comunidade?" placeholder="Qual vai ser o nome da sua comunidade?" />
							</div>
							<div>
								<input type="text" name="image" id="comunityImage" aria-label="Coloque uma url para colocarmos de capa" placeholder="Coloque uma url para colocarmos de capa" />
							</div>

							<button> Criar comunidade </button>
						</form>
					</Box>
				</div>
				<div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }} >
					<ProfileRelationsBox name="Desenvolvedores de respeito" devs={ favDevelopers } />
					<ProfileRelationsBox title="Comunidades" array={ comunidades } />
				</div>
			</MainGrid>
		</>
  	)
}

export async function getServerSideProps(context) {
	console.log('Cookies: ', nookies.get(context).USER_TOKEN)

	return {
		props: {
			githubUser : 'vieiramanda',
			bio : 'desvendadora de códigos'
		}		
		// will be passed to the page component as props -> SSR
	}
}