/* eslint-disable */
import React from 'react'; 
import Boxes from './Boxes';
const ExperimentalHome1 = () => {
    return (
        <div className='w-screen h-screen bg-background'>
            <Boxes />
            <div className='flex relative items-center z-20 justify-center w-full h-[80vh]'>
                <div className='w-3/4 text-white pr-36 flex flex-col items-start justify-center'>
                    <div className='w-full text-[13vh] text-left font-black pb-2'>
                        <div className='tracking-tighter leading-[7rem]'>
                            <span className='text-primary'>REC</span>ursion
                        </div>
                        <div className='font-sub text-3xl w-full text-left pl-2 tracking-widest'>
                            Programming Community of NIT Durgapur
                        </div>
                    </div>
                    <div className='w-full border-b-4 border-primary'></div>
                    <div className='w-full pr-[20%] font-sub pt-12 pl-1 text-2xl text-left'>
                    We are programming community of NIT Durgapur, with focus on improving  coding culture institute wide by conducting regular lectures from  
                    beginner to advance topics of programming. Our goal is to increase  student's participation in inter-collegiate contest like ACM-ICPC and  
                    help them get better.
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExperimentalHome1;