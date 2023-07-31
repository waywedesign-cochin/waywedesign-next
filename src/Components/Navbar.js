import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Menu() {
  return (
    <div>
       <div className="main-header__top clearfix">
          <div className="main-header__top-inner clearfix">
            <div className="main-header__top-left">
              <ul className="list-unstyled main-header__top-address">
                <li>
                  <div className="icon">
                    <span className="icon-pin" />
                  </div>
                  <div className="text">
                      <a  href="https://goo.gl/maps/ag2TbuBVZkZ3oT9s5" target="blank">
                    <p>Way WeDesign, India</p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-email" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:contact@waywedesign.com">
                        contact@waywedesign.com
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-header__top-right">
              {/* <div className="main-header__top-right-text">
          <p><span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?</p>
        </div> */}
              <div className="main-header__top-right-social">
                <Link target={"_blank"} href="https://wa.me/+917994643673">
                  <i className="fab fa-whatsapp" />
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.instagram.com/waywedesign/"
                >
                  <i className="fab fa-instagram" />
                </Link>

                <Link
                  target={"_blank"}
                  href="https://www.linkedin.com/company/13701254/"
                >
                  <i className="fab fa-linkedin" />
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.behance.net/waywedesign"
                >
                  <i className="fab fa-behance" />
                </Link>
                <Link target={"_blank"} href="https://twitter.com/waywedesign">
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.facebook.com/contact.waywedesign/"
                >
                  <i className="fab fa-facebook" />
                </Link>
                <Link href="https://in.pinterest.com/WayWeDesign/">
                          <i className="fab fa-pinterest-p" />
                        </Link>
              </div>
            </div>
          </div>
        </div>
    <Navbar  sticky="top" expand="lg" className="bg-body-tertiary">
      
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
            <Nav.Link>
              <Link href="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/about">About</Link>
            </Nav.Link>
            <NavDropdown className="main-dropdown" title="Our Services" id="basic-nav-dropdown">
             
              <NavDropdown title="Software & Platform" id="basic-nav-dropdown">
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
            <NavDropdown title="Digital Marketing" id="basic-nav-dropdown">
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
          
           
            
            <Nav.Link>
              <Link href="/industries">Industries</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/careers">Careers</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/blog">Blog</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Menu;
