import React from "react";
import Rave from "react-native-rave";
import { StyleSheet, View } from "react-native";

export default class Payment extends React.Component {
  static navigationOptions = {
    component: Payment,
    title: "Rave Payment"
  };
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onClose = this.onClose.bind(this);
    this.state = {
      amount: "100",
      firstname: "Tayo",
      lastname: "Adedayo",
      email: "user@testsubs.com",
      meta: [{ metaname: "storelocation", metavalue: "ikeja" }],
  //  
      ref: "12345"
    };
  }

  onSuccess(data) {
    console.log("success", data);
    // const { navigation } = this.props;
    // const currency = navigation.getParam("currency");
    // console.log("Rave_data success", res);
    // if (!res) return;
    // const { data } = res;
    // if (!currency.startsWith("GH")) {
    //   const orderId = navigation.getParam("orderId");
    //   const auto = navigation.getParam("auto");
    //   if (res.paymentType === "card") {
    //     navigation.push(Screens.Booking, {
    //       orderId,
    //       auto,
    //       transId: res.txRef,
    //       cancel: res.status !== "successful",
    //       success: res.status === "successful"
    //     });
    //   } else {
    //     navigation.push(Screens.Booking, {
    //       orderId,
    //       auto,
    //       transId: res.txRef,
    //       cancel: false,
    //       success: false
    //     });
    //   }
    // } else {
    //   if (!data) {
    //     console.log("Rave_data", res);
    //     return;
    //   }
    //   const orderId = navigation.getParam("orderId");
    //   const auto = navigation.getParam("auto");
    //   if (data.tx.paymentType === "card") {
    //     navigation.push(Screens.Booking, {
    //       orderId,
    //       auto,
    //       transId: data.tx.txRef,
    //       cancel: data.tx.status !== "successful",
    //       success: data.tx.status === "successful"
    //     });
    //   } else {
    //     navigation.push(Screens.Booking, {
    //       orderId,
    //       auto,
    //       transId: data.tx.txRef,
    //       cancel: false,
    //       success: false
    //     });
    //   }
    // }
  }

  onFailure(data) {
    console.log("error", data);
  }
  onClose() {
    const { navigate } = this.props.navigation;

    navigate("Home");
  }
  render() {
    // let itemAmount;
    // itemAmount = this.state.price;

    return (
      <View style={styles.container}>
        <Rave
          amount={this.state.amount}
          country="NG" 
          currency="NGN"
          paymentOption="card,mobilemoneygh"
          email={this.state.email}
          firstname={this.state.firstname}
         
          lastname={this.state.lastname}
          publickey="FLWPUBK-c2eb96628e74430cdf448186f1948e03-X"
          encryptionkey="7af54f191ac6db6a1a49ad19"
          meta={this.state.meta}
          production={true}
          onSuccess={res => this.onSuccess(res)}
          onFailure={e => this.onFailure(e)}
          onClose={e => this.onClose(e)}
          paymentplan={this.state.paymentplan}
          txref="ergryt3wefre"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});


