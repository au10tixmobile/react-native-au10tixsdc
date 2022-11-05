import * as React from 'react';

import { StyleSheet, View, Text, Button, Alert} from 'react-native';
import { multiply, SdcviewView } from 'react-native-au10tixsdc';
import { prepareSdk } from 'react-native-au10tixsdk';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [viaibilty, setViaibilty] = React.useState<boolean | undefined>();


  function onPress() {
      let token = 'eyJraWQiOiJhelE4LVF5ZzZmTVdxZnZoUnpyX1VVUVB2aEdmSkVob0ZiZjd2SzVMcGxFIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnFSQUNTQmlMZWdlTVJKbzhhYmxkZjhoMUJLT0ZOMHgyZ1gtck1QS3dXa0EiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2NjcwNjA1OTcsImV4cCI6MTY2NzE0Njk5NywiY2lkIjoiMG9hNG1kaTNwNHJzYWt5MlMzNTciLCJzY3AiOlsib2NzL3Njb3BlOm1vYmlsZXNkayIsInNkYyIsIm1lZGlhIiwicGZsIiwibW9iaWxlc2RrIl0sInN1YiI6IjBvYTRtZGkzcDRyc2FreTJTMzU3IiwiYXBpVXJsIjoiaHR0cHM6Ly9ldXMtYXBpLmF1MTB0aXhzZXJ2aWNlc3N0YWdpbmcuY29tIiwiYm9zVXJsIjoiaHR0cHM6Ly9ib3MtZXVzLXdlYi5hdTEwdGl4c2VydmljZXNzdGFnaW5nLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJBVTEwVElYIiwiY2xpZW50T3JnYW5pemF0aW9uSWQiOjMyNn0.M6-r_QhVYjaI52HgBLE_Z5MtZTfP-yY0G7n77qjCZuwH0OBhbVrZvegqtUi68pUMAzKdxBkTCHr9sUJiyNkJJDjLx3tUTWcAOTAq8zCYFPJQ_HpqAv74OuPD9MC6CUG9OWxiEyuN__y0FFj9qV2OaEIttZ16e0-8XkD0MHK4h8d1jIgAm8nM2P4imTJAkfQ5tI737SGolv_95DwcmyuibIa2C7TnO85l1U66PfwKOY-j4LQh6qQyLGXXuLFnzv-TALv8wvZ5j6zYlvN2bYPis69JnO1mxXUuZOa-vFDQ54XFU4x5f1Y02v51kWsuemgy1pkJdsP0kpJTTMx-QWHpLQ'
      prepareSdk(token).then(setResult);
      Alert.alert("The SDK was prepare successfully!")
      setViaibilty(true);
  }
  // React.useEffect(() => {
  //   let token = 'eyJraWQiOiJhelE4LVF5ZzZmTVdxZnZoUnpyX1VVUVB2aEdmSkVob0ZiZjd2SzVMcGxFIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmw1Ylp5cEJXcWdaaEhsUFN3U3g3Z0x6ZnBhNzZYcU5qUExaZTJPUGhZNjQiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2NjY2MTk2NjYsImV4cCI6MTY2NjcwNjA2NiwiY2lkIjoiMG9hNG1kaTNwNHJzYWt5MlMzNTciLCJzY3AiOlsib2NzL3Njb3BlOm1vYmlsZXNkayIsInNkYyIsIm1lZGlhIiwicGZsIiwibW9iaWxlc2RrIl0sInN1YiI6IjBvYTRtZGkzcDRyc2FreTJTMzU3IiwiYXBpVXJsIjoiaHR0cHM6Ly9ldXMtYXBpLmF1MTB0aXhzZXJ2aWNlc3N0YWdpbmcuY29tIiwiYm9zVXJsIjoiaHR0cHM6Ly9ib3MtZXVzLXdlYi5hdTEwdGl4c2VydmljZXNzdGFnaW5nLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJBVTEwVElYIiwiY2xpZW50T3JnYW5pemF0aW9uSWQiOjMyNn0.O1FsRei2xsZpYKahXTcbH90aGLpXATJMiXJgwNRzGWrKXTkdjjHlOfEgxiUE7T3yOqyqH6pQPqoCnDRVrHTgEXZZAeg6KIs1XGFA8TujSNTamGcovwt2uq17KCM1rftSiZNO_heqPi6-81UtIeA0wh2k1JYKJQbaQGHqFQLETF42YTtPUIIclijwy7HC9HkyTftjDgihvGQ_0a4Riuu752I-VEJjR8mmpCfCB5H5dhY-9Rz1pC5kckLcU63cJFv6-wuSYjh3ZY5PuWmOPmNwuoh9KpdFqeL42J2VsPfwFJV5Aw9Trp1e9ENXW3OmtIiahcRWQJHSb--b2Co3MO1AOw'
  //   prepareSdk(token).then(setResult);
  // }, []);

  // return (
  //   <View style={styles.container}>
  //     <Text>Result: {result}</Text>
  //   </View>
  // );

  // return (
  //   <View style={styles.container}>
  //     <SdcviewView color="#32a852" style={styles.box} />
  //   </View>
  // );
  return (
    <View style={styles.container}>
    <View style={styles.buttonContainer}>

      <Button onPress={onPress} title="Prepare SDK" color="#000000"/>
      {
        viaibilty ? <View style={styles.buttonContainer1}>
        {
          viaibilty ?  <Button onPress={onPress} title="Start SDC" color="#FFFFFF"/>
            : null
        }
        </View>
        : null
      }


    </View>
    <View style={styles.buttonContainer}>
      <Text>Result: {result}</Text>
    </View>
    {/* <View style={styles.buttonContainer}>
      
    </View> */}
  </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    margin: 10,
  },
  buttonContainer1: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    margin: 10,
  }
});


