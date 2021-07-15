import styled from 'styled-components';
import Box from '../Box';

export function ProfileRelationsBox( props ) {

  if (props.title == "Comunidades") { 
    console.log(props) 
    return (
      <ProfileRelationsBox.Wrapper>
        <h2 className="smallTitle">
          {props.title} ({props.array.length})
        </h2>
        <ul>					
        {props.array.map((comu, index) => {
          if (index < 6) {
            return (
              <li key={comu.title}>
                <a href={`/users/${comu.title}`} target="_blank">
                  <img src={comu.image} />
                  <span>{comu.title}</span>
                </a>
              </li>
            )										
          } 
        })}
        </ul>
      </ProfileRelationsBox.Wrapper>
    )

  } else {
    console.log("fav devs 1 = ", props)
    return(
      <ProfileRelationsBox.Wrapper>
        <h2 className="smallTitle">
          {props.name} ({props.devs.length})
        </h2>
        {/*
        <ul>					
          {props.devs.map((developer, index) => {
            if (index < 6) {
              return (
                <li key={developer}>
                  <a href={`/users/${developer}`} target="_blank">
                    <img src={`https://github.com/${developer}.png`} />
                    <span>{developer}</span>
                  </a>
                </li>
              )
            }					
          })}
        </ul>
        */}
      </ProfileRelationsBox.Wrapper>
    )
  }
}

ProfileRelationsBox.Wrapper = styled(Box)` 
//o componente ProfileRelations está reutilizando o componente Box 
//e adaptando a sua estilização para o ProfileRelations
  background-color: #D9E6F6;
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`;




export const ProfileRelationsBoxWrapper = styled(Box)` 
  background-color: #D9E6F6;
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`;

