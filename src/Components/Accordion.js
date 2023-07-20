import Accordion from 'react-bootstrap/Accordion';



const AccordionFaq = (props) => {
  return (
    
    <Accordion defaultActiveKey="0" className="service-details__faq" accordion>
      <Accordion.Item eventKey={`${props.eventkey}`} className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
        <Accordion.Header className="accrodion-title"><h4>{props.title}</h4> </Accordion.Header>
        <Accordion.Body className="accrodion-content">
       {props.desc}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

  )
}

export default AccordionFaq