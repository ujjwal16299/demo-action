import React from 'react';
import "../tw.css";
interface cardProps {
    configs: {
        title: string,
        description: string,
        imageUrl: string,
        buttonText: string
    }
}

const Card: React.FC<cardProps > = ({configs}) => {
    const { title, description, imageUrl, buttonText } = configs;

    return (
        <>
            <div className="max-w-xs rounded overflow-hidden shadow-lg">
                <img className="w-full" src={imageUrl} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                    <button className="bg-blue-600 text-white p-2 mt-2 w-auto rounded" type='submit'>{buttonText}</button>
                </div>
            </div>
        </>
    )
};

export default Card;
