FILE2='./node_modules/react-native/index.js'

result=$(sed -n 438p $FILE2 | grep -q "invariant(" && echo "found")

case "$(uname -s)" in
	Darwin)
    if [[ $result == 'found' ]];then
      sed -i '' "437,464d" $FILE2

      sed -i '' "437i\\
        get ColorPropType(): \$FlowFixMe {\\
          return require('deprecated-react-native-prop-types').ColorPropType;\\
        },\\
      \\
        get EdgeInsetsPropType(): \$FlowFixMe {\\
          return require('deprecated-react-native-prop-types').EdgeInsetsPropType;\\
        },\\
      \\
        get PointPropType(): \$FlowFixMe {\\
          return require('deprecated-react-native-prop-types').PointPropType;\\
        },\\
      \\
        get ViewPropTypes(): \$FlowFixMe {\\
          return require('deprecated-react-native-prop-types').ViewPropTypes;\\
        },\\
      " $FILE2
    fi
	;;
	Linux)
    if [[ $result == 'found' ]];then
      sed -i "437,464d" $FILE2

      sed -i "437i\\
        get ColorPropType(): \$FlowFixMe {\\
          return require('deprecated-react-native-prop-types').ColorPropType;\\
        },\\
      \\
        get EdgeInsetsPropType(): \$FlowFixMe {\\
          return require('deprecated-react-native-prop-types').EdgeInsetsPropType;\\
        },\\
      \\
        get PointPropType(): \$FlowFixMe {\\
          return require('deprecated-react-native-prop-types').PointPropType;\\
        },\\
      \\
        get ViewPropTypes(): \$FlowFixMe {\\
          return require('deprecated-react-native-prop-types').ViewPropTypes;\\
        },\\
      " $FILE2
    fi
	;;
esac