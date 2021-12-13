import ContactsLiElem from "../ContactsLiElem/ContactsLiElem";

function Contacts({ names, onClick }) {
    return ( 
        <ul>
            {names().map(elem => {
                return (
                    <ContactsLiElem
                        id={elem.id}
                        name={elem.name}
                        number={elem.number}
                        onClick={onClick}
                        key={elem.id}
                    />)
            })}
        </ul>
    )
}
export  {Contacts}