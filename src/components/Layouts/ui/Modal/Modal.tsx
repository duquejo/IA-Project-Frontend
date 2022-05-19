import React, { FC } from 'react';

export interface IModalProps {
    open: boolean,
    content: string,
    title: string
}

export const Modal: FC<IModalProps> = ({ open, content, title }): JSX.Element | null => {
    
    
    return open ? (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center">
            <div className="w-1/2 h-1/2 p-5 rounded-xl shadow-lg bg-white m-auto">
                <h1 className="text-black">{ title }</h1>
                <p>{ content }</p>
                <p>Please center me</p>
            </div>
        </div>
    ) : null;
};
