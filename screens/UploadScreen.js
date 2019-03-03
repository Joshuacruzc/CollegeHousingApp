import React from "react";
import {Image, Button, View} from 'react-native'
import ImagePicker from 'react-native-image-picker'

const options = {
    title: 'Select Image',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};


class UploadScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            imageSource: ''
        }
    }
    pickImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log("Response = ", response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                console.log('Bops');
                const source = {uri: response.uri};
                this.setState({
                    imageSource: source
                });
                const data = new FormData();
                data.append('name', 'testName'); // you can append anyone.
                data.append('photo', {
                    uri: source.uri,
                    type: 'image/jpeg', // or photo.type
                    name: 'testPhotoName'
                });
                fetch("http://127.0.0.1:8000/images/", {
                    method: 'post',
                    body: data
                }).then(res => {
                    console.log(res)
                });
            }
        });
    };
    render()
    {
        return (
            <View>
            <Button title={"Bops"} onPress={this.pickImage}/>
            <Image style = {{ width: 150, height: 150 }} source={this.state.imageSource}/>
            </View>
        )
    }

}
export default UploadScreen;