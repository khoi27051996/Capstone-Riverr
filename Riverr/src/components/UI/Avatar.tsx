import {Avatar as AvatarA, AvatarProps as AvatarPropsA} from 'antd';
import { GroupProps } from 'antd/es/avatar';
import React from 'react';

type AvartarObject = {
    (props: AvatarPropsA) : JSX.Element
    Group : React.FC<GroupProps>
}

export const Avatar : AvartarObject = (props)=>{
    return <AvatarA {...props}/>
}

Avatar.Group = AvatarA.Group