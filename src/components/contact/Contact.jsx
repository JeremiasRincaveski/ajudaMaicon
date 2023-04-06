import styled from "styled-components"

const ContactWrapper = styled.ul`
    display:flex;
    justify-content:space-between;
    list-style-type: none;

    li:nth-child(1){
        display:flex;
        flex-direction: column;
        gap: 2rem;
        width:50%;

        span:nth-child(1){
            display:flex;
        }
    }
    li:nth-child(2){
        width:50%;

        input{
            width:100%;
            height: 50px;
            background-color:transparent;
            border:none;
            border-bottom:1px solid;
            font-size:16px;
            padding: 0 1rem;
        }

        input::placeholder, textarea{
            text-transform:uppercase;
            font-weight: 700;
        }

        textarea{
            width:100%;
            background-color:transparent;
            border:none;
            border-bottom:1px solid;
            padding: 2.4rem 1rem;
            font-size:16px;
            height: 100px;
            overflow: hidden;
        }
    }

`
const StyledTitle = styled.h1`
    text-transform:uppercase;
    font-size: 50px;
    font-weight: 900;
    border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
    font-style: italic;
`
export const AllTitlesStyle = ( {customName='customName'} ) => {
    return <StyledTitle>{customName}</StyledTitle>
}

export const Contact = () => {
  return (
    <ContactWrapper>
        <li>
            <span><AllTitlesStyle customName='contact'/></span>
            <span> I would love to hear about your project and how I could help. Also if you like my projects and want to hire me please contact me, and I’ll get back to you as soon as possible</span>
        </li>
        <li> 
            <input required type="text" placeholder="name"/>
            <input required type="email" placeholder="email"/>
            <textarea  required cols="30" rows="6" placeholder="message"/>
        </li>
    </ContactWrapper>
  )
}