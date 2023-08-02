
import React from "react";
import {BsChatDots,BsSearch} from 'react-icons/bs';
import {IoMdNotificationsOutline} from 'react-icons/io';

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  Input,
  
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,

} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 ite  lg:flex-row lg:p-1 lg:pr-[40px]">

         <Typography  as="a" variant="small" className="font-normal">
         <Link to="">
        <ListItem className="flex items-center gap-2 py-2 -mt-1 pr-10 hover:bg-green-700 hover:text-white " >
          
          <IoMdNotificationsOutline className="h-[18px] w-[18px]"/>
        </ListItem>
        </Link>
        </Typography>

        <Typography  as="a" variant="small" className="font-normal">
           <Link to="">
        <ListItem className="flex items-center gap-2 py-2 -mt-1 pr-10 hover:bg-green-700 hover:text-white " >
         
          <BsChatDots className="h-[18px] w-[18px]"/>
        </ListItem>
        </Link>
      </Typography>

      <Typography  className=''>
     <Menu className=''> 
      <MenuHandler>
        {/* <Button>Open Menu</Button> */}
        <ListItem>
      <Avatar src="./user-profile.png" alt="avatar" className="w-6 h-6  sm:items-center lg:-mt-4 "  variant="rounded" />
      </ListItem>
      </MenuHandler>
      <MenuList>
        <MenuItem>Edit </MenuItem>
        <MenuItem>View</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>

      
      </Typography>
    </List>
  );
}
 
export default function Adminnavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <> 
    {/* <div className="flex justify-center items-center"> */}
       {/* <div className="2xl:w-full lg:w-full w-full relative ">   */}
     {/* <Navbar className=" top-0 left-0 right-0 2xl:inset-auto  z-10 block h-max w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-black shadow-lg backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4"> */}
     <Navbar className="mx-auto max-w-screen-xl px-4 py-3">

      <div className="flex items-center justify-between text-white-900 lg:pl-10">
        
        <Link to='/'>
        <img src="./images/logo.jpeg" className='h-12' alt='LOGO' />
          </Link>

          <div className="hidden lg:block">
        
           <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              label="Search..."
              className="pr-20"
              containerProps={{
                className: "w-auto",
              }}
            />
            <Button size="sm" className="  !absolute right-1 translate-y-1.5 rounded">
            <BsSearch className=""/>
            </Button>
          </div>
           
          
        

    
          </div>
     
        <div className="hidden lg:block">
          <NavList />
        </div>
      
                  
      
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        
      </Collapse>
    </Navbar>
    {/* </div>   */}
         {/* </div> */}
    </>

  );
}