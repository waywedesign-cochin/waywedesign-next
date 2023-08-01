import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function MobileMenu() {
  return (
    <div className='mobileMenu'>
       
    <Navbar  sticky="top" expand="lg" className="bg-body-tertiary ">
      
      <Container className="navabr-container" >
        <Navbar.Brand href="/">
          <img
            className=""
            width="150px"
            src="/assets/images/logo-wwd.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav>
              <Link href="/">Home</Link>
            </Nav>
            <Nav>
              <Link href="/about">About</Link>
            </Nav>
            <NavDropdown className="main-dropdown" title="Our Services" id="basic-nav-dropdown">
             
              <NavDropdown  title="software-development-platform" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link href="/mobile-app-development">Mobile App Development</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/retail-and-ecommerce">Retail And Ecommerce</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/iot-development">IOT Development</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/payroll-management-softwares">Payroll Management Softwares</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/erp-crm-solution">ERP & CRM Solutions</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/assessment-platforms">Assessment Platforms</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/dashboard-reporting">Dashboard Reporting</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/data-labeling">Data Labelling & Classification</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/pen-testing">Pen Testing</Link>
              </NavDropdown.Item>
              </NavDropdown>
            {/* digitla marketing */}
            <NavDropdown title="digital-marketing" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link href="/search-engine-optimization">Search Engine Optimization (SEO)</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/social-media-marketing">Social Media Marketing(SMM)</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/google-ads">Google Ads</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/email-marketing">Email Marketing</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/graphic-designing">Digital Branding</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/video-production">Video Production</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/content-marketing">Content Marketing</Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* digitla marketing */}
            <NavDropdown.Item>
              <Link href="/web-development">Web Development</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/cloud-service">Cloud Service</Link>
            </NavDropdown.Item>
            <NavDropdown title="HRM" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link href="/professional-staffing">Professional Staffing</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/outsourcing">Outsourcing</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Item>
              <Link href="/ui-ux-design">UI/UX Design</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/digital-marketing-academy">Digital Academy</Link>
            </NavDropdown.Item>
            </NavDropdown>
          
           
            
            <Nav>
              <Link href="/industries">Industries</Link>
            </Nav>
            <Nav>
              <Link href="/careers">Careers</Link>
            </Nav>
            <Nav>
              <Link href="/blog">Blog</Link>
            </Nav>
            <Nav>
              <Link href="/contact">Contact</Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default MobileMenu;
