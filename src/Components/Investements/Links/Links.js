import './Links.css';
import { Link } from 'react-router-dom';
export default function Links()
{
    return(
         
        <div className="parent-footer">
        <div className='footer'>
          <ul className='ul1'>
            <li><Link className='link' to='/vision'>Vision</Link></li>
            <li><Link className='link' to='/approash'>Approash</Link></li>
            <li><Link className='link' to='/culture'>Culture</Link></li>
            <li><Link className='link' to='/investements'>Investements</Link></li>
          </ul>
          <ul className='ul2'>
            <li><Link className='link' to='/Al Rajhi Investement'>Al Rajhi Investement</Link></li>
          </ul>
          <ul className='ul3'>
            <li><Link className='link' to='/carrers'>Carrers</Link></li>
            <li><Link className='link' to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className='plus'>
          <ul className='ul4'>
            <li><Link className='link' to='/Terms of use'>Terms of use</Link></li>
          </ul>
        </div>
      </div>
    )
}