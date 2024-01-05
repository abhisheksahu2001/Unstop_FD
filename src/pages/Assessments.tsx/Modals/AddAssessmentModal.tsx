import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const AddAssessmentModal = () => {
    const searchInput = [
        { id: 'ui/1', skill: 'UI/UX and Design' },
        { id: 'web2', skill: 'Web Development' },
        { id: 'no3', skill: 'No of Question' },
        { id: 'ui/4', skill: 'UI/UX and Design' },
        { id: 'web5', skill: 'Web Development' },
    ]
    const [SkillsArray, setSkillsArray] = useState(searchInput)

    const AddToSkillsArray = (item: string) => {
        setSkillsArray([...SkillsArray, { id: `${item.slice(0, 3)}${SkillsArray.length + 1}`, skill: item, }])
    }
    const RemoveFromSkillArray = (item: string) => {
        const remainingSkills = SkillsArray.filter((skill) => skill.id != item);
        setSkillsArray(remainingSkills)
    }
    const [newSkill, setNewSkill] = useState<string>('');
    return (
        <form className=' px-2 py-5 xl:p-5  flex items-start gap-3  xl:gap-4 flex-col [&>label]:w-full 
        [&>label]:font-semibold [&>label]:text-sm [&>input]:font-semibold [&>select]:font-semibold
         lg:[&>label]:text-md [&>label]:font-font-inter
         [&>input]:w-full [&>select]:w-full
        '>
            <label>Name of assessment</label>
            <input type='text' placeholder='Type Here' className='placeholder:text-primaryText border outline-none  border-primaryBorder rounded-md   2xl:p-3 p-2' />
            <label>Purpose of the test is </label>
            <select className=' appearance-none after:content-["<"] after:relative after:top-0 after:right-0 after:rotate-45  outline-none border border-primaryBorder rounded-md 2xl:p-3 p-2'>
                <option defaultChecked >Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            <label>Description </label>
            <select className=' appearance-none after:content-["<"] after:absolute after:top-2 after:right-0 after:rotate-45   outline-none border border-primaryBorder rounded-md 2xl:p-3 p-2'>
                <option defaultChecked >Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            <label>Skills </label>
            <div className='flex flex-col w-full border border-primaryBorder rounded-md divide-y divide-primaryBorder  '>
                <span className=' max-h-[150px] flex flex-wrap min-h-[50px] p-2 overflow-y-auto  ' >
                    {SkillsArray && SkillsArray.map((item) => (
                        <span key={item.id} className='flex m-1  items-center gap-2  w-min rounded-full   bg-AccentBlueBackground 
                        text-primaryText  px-2 py-[5px] text-xs font-font-inter font-medium    ' >
                            <p className='w-max' >{item.skill}</p>
                            <button className='w-max' type='button' >
                                <IoMdClose size={18}
                                    onClick={() => RemoveFromSkillArray(item.id)}
                                />
                            </button>
                        </span>
                    ))}
                </span>
                <span className='flex items-center justify-between px-2'>
                    <input type='text' value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder='Type Here' className='flex-1 placeholder:text-primaryText  outline-none  2xl:p-3 p-2' />
                    {newSkill.length > 0 && (
                        <button className='text-sm rounded-full px-4 border bg-AccentBlueBackground text-primaryText '

                            onClick={() => AddToSkillsArray(newSkill)} type='button'
                        >Add</button>
                    )}
                </span>
            </div>
            <label>Duration of assessment</label>
            <input type='text' placeholder='HH:MM:SS' className='placeholder:text-secondaryText border outline-none  border-primaryBorder rounded-md xl:p-3 p-2' />
            <button className='font-semibold rounded-md bg-AccentBlue text-secondaryBackground py-2 w-full ' type='button'>Save</button>
        </form>
    )
}

export default AddAssessmentModal