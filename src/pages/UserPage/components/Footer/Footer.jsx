import { Row,Col,Container } from "react-bootstrap";
import dino from "./../../../../img/Footer/dino.svg";
import logo from "./../../../../img/NavBar/logo_with_name.svg"
import "./Footer.css"

const Footer=(props)=>{
    return(
    <Container fluid className='footer-container'>
    <Row>
        <Col md="4">
        <img src={dino} className="footer_dino" />
        </Col>
        <Col md="4" className="text-center">       
            <img src={logo} className="footer_logo"/>
        </Col>
        <Col md="4" className="text-center">   
         <Row className="pt-5">
             <Col md="12">
                 <h3>+38-096-250-16-88</h3>
                 <span>Для дзвінків по Україні</span>
             </Col>
        </Row>
        <Row className="pt-3">
             <Col md="12">
             <h3>+38-063-818-55-86</h3>
             <span>Для дзвінків по Україні</span>
             </Col>
        </Row>   
        </Col>
    </Row>    
    <Row className="text-center mt-5 pb-3">
        <Col md="4">
          <h6>Усі Контакти</h6>
        </Col>
        <Col md="4">
        <h6>Київ</h6>
        </Col>
        <Col md="4">
        <h6>Українська</h6>
        </Col>
    </Row>
    <Row>   
        <h6 className="footer_text">ГО «ReadMe» використовує файли «соокіе» з метою персоналізації сервісів та підвищення зручності користування веб-сайтом. Якщо ви не хочете, щоб ваші дані користувача оброблялися, будь ласка, обмежте їх використання у своєму браузері.</h6>
    </Row>
    </Container>
    );
}

export default Footer;