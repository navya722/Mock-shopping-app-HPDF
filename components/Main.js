import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, Icon, Form, Item, Input, Button, Container} from 'native-base';
import {Store} from './Store';


class Main extends React.Component {
    render() {
        return(
            <Container>
                <Form style={{flexDirection:'row'}}>
                    <Item rounded bordered style={styles.searchbar}>
                        <Input placeholder="Search..."/>
                    </Item>
                    <Button light style={styles.filterButton}>
                        <Icon name='settings'/>
                    </Button>
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    searchbar:{
        backgroundColor:'rgba(255,255,255,0.87)',
        width:'70%',
        marginTop:10,
        marginLeft: 20
    },
    filterButton:{
        marginTop:10,
        marginLeft: 10
    }
});

export default connect(
    (store) => {
        return store;
    }
)(Main);
