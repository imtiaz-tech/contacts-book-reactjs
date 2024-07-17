import react from 'react'

function ContactInfo(props){
        const{Name,PhoneNo,Address}=props;
    return(
        <tr>
          <td>{Name}</td>
          <td>{PhoneNo}</td>
          <td>{Address}</td>
          
        </tr>
)
}

export default ContactInfo;