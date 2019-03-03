import gql from "graphql-tag";
import Mutation from "react-apollo/Mutation";
import {ReactNativeFile} from "apollo-upload-client";
import React from "react";


export const etFileFromURI = (uri) => {
    return new ReactNativeFile({
        uri:uri,
        name: 'bops.jpg',
        type: 'image/jpeg'
    });

};

export const uploadImage =  gql`
    mutation uploadImage($file: Upload!){
        uploadMutation(file: $file){
            success
        }
    }
    `;

