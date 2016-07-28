INSTALLATION

```shell
npm i react-native-scrollview-smart --save
```

- Add to android/settings.gradle

```groovy
include ':react-native-scrollview-smart'
project(':react-native-scrollview-smart').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-scrollview-smart/android')
```
- Add to android/app/build.gradle

```groovy
compile project(':react-native-scrollview-smart')
```

- Add to android/app/src/main/AndroidManifest.xml

```xml
<application ... >
    <activity
        android:windowSoftInputMode="adjustResize" ... >
        ...
    </activity>
    ...
</application>
```

- Register module in MainActivity.java

```java
import com.jblack.keyboardaware.views.scrollview.AndroidKeyboardAwareScrollViewPackage;    // <--- import

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
  ......

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    ...

    mReactInstanceManager = ReactInstanceManager.builder()
      ...
      .addPackage(new AndroidKeyboardAwareScrollViewPackage())  // <--- add here
      ...
      .build();

    ...
  }

  ......
}
```

- Add to MainActivity.java

```java
import com.jblack.keyboardaware.views.scrollview.AndroidKeyboardAwareScrollViewPackage;
```
