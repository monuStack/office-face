import { IoCallOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import Calender from './calender/Calender'


export default function Desboard(){

        return(
            <div>
                <div>
                <IoCallOutline/>
                <SlCalender/>
                </div>
                <div>
                    <div>
                       <h3>Mon,Nov 16</h3> 
                       <SlCalender/>
                    </div>
                    <div>
                    <Calender/>
                    </div>
                </div>
            </div>
        )
}