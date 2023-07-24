import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import  Link  from "next/link";
// import logo from '../images/logos-wwd.png'


export default function MobileMenu() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar className="MDBNavbar" expand="lg" >
      <MDBContainer>
        <MDBNavbarBrand href="#">
          <Link onClick={() => setShowBasic(false)} href="/">
          <img width="150px" src="	https://waywedesign.com/static/media/logo-wwd.4e2615278b2f75eca268.png" alt="logo" />
          </Link>
        
           
          
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
<FontAwesomeIcon icon={faBars} beat style={{color: "#000000",}} />          
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link onClick={() => setShowBasic(false)}  href="/">Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link onClick={() => setShowBasic(false)} href="/about">About</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Our Services 
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="">
                      
                      <Link onClick={() => setShowBasic(false)} href="/software-development-platform">
                        Software & Platform <MDBIcon fas icon="caret-right" />
                      </Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                    
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link onClick={() => setShowBasic(false)} href="/mobile-app-development">
                            Mobile App Development
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link onClick={() => setShowBasic(false)} href="/retail-and-ecommerce">
                            Retail And Ecommerce
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/iot-development">IOT Development</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/payroll-management-softwares">
                            Payroll Management Softwares
                          </Link>
                        </MDBDropdownLink>
                        </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/erp-crm-solution">
                          ERP & CRM Solutions  
                          </Link>
                        </MDBDropdownLink>
                        </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link onClick={() => setShowBasic(false)} href="/assessment-platforms">
                            Assessment Platforms
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                         
                          <Link onClick={() => setShowBasic(false)} href="/dashboard-reporting">
                            Dashboard Reporting
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/data-labeling"> Data Labelling & Classification</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/pen-testing"> Pen Testing</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      
                      
                     
                    </ul>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="">
                      
                      <Link onClick={() => setShowBasic(false)} href="/digital-marketing">Digital Marketing <MDBIcon fas icon="caret-right" /></Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/search-engine-optimization">
                            Search Engine Optimization (SEO)
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/social-media-marketing">
                            Social Media Marketing(SMM)
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/google-ads">Google Ads</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/email-marketing">Email Marketing</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/graphic-designing">Digital Branding</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/video-production">Video Production</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/content-marketing">Content Marketing</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      {/* <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/digital-marketing/logo-design">Logo Design</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem> */}
                      {/* <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/digital-marketing/brochure-design">Brochure Design</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem> */}
                    </ul>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      
                      <Link onClick={() => setShowBasic(false)} href="/web-development ">Web Development </Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      
                      <Link onClick={() => setShowBasic(false)} href="/cloud-service ">Cloud Service </Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="">
                       <Link onClick={() => setShowBasic(false)} href="/hrm">HRM <MDBIcon fas icon="caret-right" /></Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/professional-staffing">
                          Professional Staffing
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link onClick={() => setShowBasic(false)} href="/outsourcing">
                          Outsourcing                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>                    
                    </ul>
                  </MDBDropdownItem>
                  {/* <MDBDropdownItem>
                    <MDBDropdownLink href="">
                       <Link href="">Web Design & Development</Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link href="/website-design">
                          Website  Design
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link href="/website-development">
                          Website Development                      </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>                    
                    </ul>
 onClick={() => setShowBasic(false)}                  </MDBDropdownItem> */}
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      
                      <Link onClick={() => setShowBasic(false)} href="/ui-ux-design">UI/UX Design</Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      <Link onClick={() => setShowBasic(false)} href="/digital-marketing-academy">
                        Digital Academy
                      </Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link onClick={() => setShowBasic(false)} href="/industries">Industries</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link onClick={() => setShowBasic(false)} href="/careers">Careers</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link onClick={() => setShowBasic(false)} href="/blog">Blog</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link onClick={() => setShowBasic(false)} href="/contact">Contact Us</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
