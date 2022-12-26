import { settings } from "settings";
import { XMLHttpRequest } from "xmlhttprequest";

function mySettings(props) {
  return (
    <Page>

      <Section
        title={
          <Text bold>
            Data Source Settings
          </Text>
        }
      >
        <Select
          label={`Data Source`}
          settingsKey="dataSource"
          options={[
            { name: "Dexcom", value: "dexcom" },
            { name: "Nightscout", value: "nightscout" },
            { name: "xDrip+", value: "xdrip" },
            { name: "Spike", value: "spike" },
            { name: "Tomato", value: "tomato" },
            { name: "Custom", value: "custom" },
          ]}
        />

        {props.settings.dataSource ? (
          JSON.parse(props.settings.dataSource).values[0].value == "custom" ? (
            <TextInput label="Api endpoint" settingsKey="customEndpoint" />
          ) : null
        ) : null}

        {props.settings.dataSource ? (
          JSON.parse(props.settings.dataSource).values[0].value ==
          "nightscout" ? (
            <Text>
              https://<Text bold>SiteName</Text>.NightscoutHostSite.com
            </Text>
          ) : null
        ) : null}

        {props.settings.dataSource ? (
          JSON.parse(props.settings.dataSource).values[0].value ==
          "nightscout" ? (
            <TextInput
              title="Nightscout"
              label="Site Name"
              settingsKey="nightscoutSiteName"
            />
          ) : null
        ) : null}

        {props.settings.dataSource ? (
          JSON.parse(props.settings.dataSource).values[0].value ==
          "nightscout" ? (
            <Text>
              https://SiteName.<Text bold>NightscoutHostSite</Text>.com
            </Text>
          ) : null
        ) : null}
        {props.settings.dataSource ? (
          JSON.parse(props.settings.dataSource).values[0].value ==
          "nightscout" ? (
            <Select
              label="Nightscout Host Site"
              settingsKey="nightscoutSiteHost"
              options={[
                { name: "Heroku", value: "herokuapp.com" },
                { name: "Azure", value: "azurewebsites.net" },
              ]}
            />
          ) : null
        ) : null}

        {props.settings.dataSource ? (
          JSON.parse(props.settings.dataSource).values[0].value == "dexcom" ? (
            <Section
              title={
                <Text bold>
                  Dexcom
                </Text>
              }
            >
              <TextInput
                title="Username"
                label="Dexcom Username"
                settingsKey="dexcomUsername"
              />
              <TextInput
                title="Password"
                label="Dexcom Password"
                settingsKey="dexcomPassword"
              />
              <Toggle
                settingsKey="USAVSInternational"
                label="International (Not in USA)"
              />
            </Section>
          ) : null
        ) : null}
      </Section>

      <Section
        title={
          <Text bold>
            Glucose Settings
          </Text>
        }
      >
        <Select
          label={`Glucose Units`}
          settingsKey="glucoseUnits"
          options={[
            { name: "mgdl", value: "mgdl" },
            { name: "mmol", value: "mmol" },
          ]}
        />
        <Toggle settingsKey="showGlucoseUnits" label="Display Glucose Units" />
        <TextInput label="High Threshold" settingsKey="highThreshold" />
        <TextInput label="Low Threshold" settingsKey="lowThreshold" />
        <Toggle settingsKey="disableAlert" label="Disable Alerts" />
        <Toggle
          settingsKey="extraGlucoseSettings"
          label="Extra Glucose Settings"
        />

        {props.settings.extraGlucoseSettings ? (
          JSON.parse(props.settings.extraGlucoseSettings) == true ? (
            <Section
              title={
                <Text bold>
                  Extra Glucose Settings
                </Text>
              }
            >
              <Text bold>
                Alerts
              </Text>
              <Toggle settingsKey="highAlerts" label="High Alerts" />
              <TextInput
                label="Dismiss high alerts for n minutes"
                settingsKey="dismissHighFor"
              />
              <Toggle settingsKey="lowAlerts" label="Low Alerts" />
              <TextInput
                label="Dismiss low alerts for n minutes"
                settingsKey="dismissLowFor"
              />
              <Toggle settingsKey="rapidRise" label="Rapid Rise Alerts" />
              <Toggle settingsKey="rapidFall" label="Rapid Fall Alerts" />
              {props.settings.dataSource ? (
                JSON.parse(props.settings.dataSource).values[0].value ==
                "nightscout" ? (
                  <Toggle settingsKey="loopstatus" label="Loop Status Alerts" />
                ) : null
              ) : null}
              <Toggle settingsKey="staleData" label="Stale Data Alerts" />
              <TextInput
                label="Stale data alerts after n minutes"
                settingsKey="staleDataAlertAfter"
              />
              <Toggle
                settingsKey="resetAlertDismissal"
                label="Dismiss alarm when back in range"
              />
            </Section>
          ) : null
        ) : null}
      </Section>

      <Section
        title={
          <Text bold>
            Date/Time Settings
          </Text>
        }
      >
        <Select
          label={`Time Format`}
          settingsKey="timeFormat"
          options={[
            { name: "12hr", value: false },
            { name: "24hr", value: true },
          ]}
        />
        <Select
          label={`Date Format`}
          settingsKey="dateFormat"
          options={[
            { name: "MM/DD/YYYY", value: "MM/DD/YYYY" },
            { name: "DD/MM/YYYY", value: "DD/MM/YYYY" },
            { name: "YYYY/MM/DD", value: "YYYY/MM/DD" },
            { name: "DD.MM.YYYY", value: "DD.MM.YYYY" },
            { name: "Month Day, Year", value: "Month Day, Year" },
            { name: "Month Day", value: "Month Day" },
          ]}
        />
        <Toggle settingsKey="enableDOW" label="Display day of the week" />
      </Section>

      <Section
        title={
          <Text bold>
            Layout
          </Text>
        }
      >

        <Text bold>
          Background Color
        </Text>

        <ColorSelect
          centered={true}
          settingsKey="bgColor"
          colors={[
            { color: "#000000" },
            { color: "#390263" },
            { color: "#4D86FF" },
            { color: "#aa2c73" },
            { color: "#025C63" },
            { color: "#FFFFFF" },
          ]}
        />

        {props.settings.bgColor ? (
          JSON.parse(props.settings.bgColor) == "#FFFFFF" ? (
            <Section title={}>
              <Text bold>
                Random Color Generator
              </Text>
              <Text>
                The white color circle will generate a random color for you, if
                you find a color that youbold like turn on save color to save
                it! Need help finding a hex color code?{" "}
                <Link source="https://www.color-hex.com/">
                  check out this site.
                </Link>
              </Text>
              <Toggle settingsKey="saveColor" label="Save Color" />
              <TextInput label="Hex Color One" settingsKey="hexColor" />{" "}
              <TextInput label="Hex Color Two" settingsKey="hexColorTwo" />{" "}
              <TextInput label="Text Color" settingsKey="textColor" />
            </Section>
          ) : null
        ) : null}

        {props.settings.dataSource ? (
          JSON.parse(props.settings.dataSource).values[0].value ==
            "nightscout" ||
          JSON.parse(props.settings.dataSource).values[0].value == "spike" ? (
            <Section>
              <Text bold>
                Customize
              </Text>
              <Text>
                The customize section is used for customizing the user interface
                of Glance, you can replace the default values of Glance with
                other values present.
              </Text>
              <Text>
                Note: If the value selected is not present on your data source
                it will show the default option.
              </Text>
              <Select
                label={`Layout One`}
                settingsKey="layoutOne"
                options={[
                  { name: "Insulin on board (default)", value: "iob" },
                  { name: "predicted bg", value: "predictedbg" },
                  { name: "current bg", value: "currentbg" },
                  { name: "temp basal", value: "tempbasal" },
                  { name: "raw bg", value: "rawbg" },
                  { name: "loop status", value: "loopstatus" },
                  { name: "uploader battery", value: "upbat" },
                  { name: "Sensor age", value: "sage" },
                ]}
              />
              <Select
                label={`Layout Two`}
                settingsKey="layoutTwo"
                options={[
                  { name: "Carbs on board (default)", value: "cob" },
                  { name: "predicted bg", value: "predictedbg" },
                  { name: "current bg", value: "currentbg" },
                  { name: "temp basal", value: "tempbasal" },
                  { name: "raw bg", value: "rawbg" },
                  { name: "loop status", value: "loopstatus" },
                  { name: "uploader battery", value: "upbat" },
                  { name: "Sensor age", value: "sage" },
                ]}
              />
              <Select
                label={`Layout Three`}
                settingsKey="layoutThree"
                options={[
                  { name: "steps (default)", value: "steps" },
                  { name: "predicted bg", value: "predictedbg" },
                  { name: "current bg", value: "currentbg" },
                  { name: "temp basal", value: "tempbasal" },
                  { name: "raw bg", value: "rawbg" },
                  { name: "loop status", value: "loopstatus" },
                  { name: "uploader battery", value: "upbat" },
                  { name: "Sensor age", value: "sage" },
                ]}
              />
              <Select
                label={`Layout Four`}
                settingsKey="layoutFour"
                options={[
                  { name: "heart (default)", value: "heart" },
                  { name: "predicted bg", value: "predictedbg" },
                  { name: "current bg", value: "currentbg" },
                  { name: "temp basal", value: "tempbasal" },
                  { name: "raw bg", value: "rawbg" },
                  { name: "loop status", value: "loopstatus" },
                  { name: "uploader battery", value: "upbat" },
                  { name: "Sensor age", value: "sage" },
                ]}
              />
            </Section>
          ) : null
        ) : null}
      </Section>
      <Section
        title={
          <Text bold>
            Help
          </Text>
        }
      >
        <Link source="https://github.com/Rytiggy/Glance/wiki/How-to-set-up-Glance#2-settings">
          How to set up Glance
        </Link>
        <Text>
          Note: Tapping on the reading in the top left will force the watch to sync—the watch will vibrate.
        </Text>
      </Section>

      <Toggle settingsKey="toggle" label="Advanced" />
      {props.settings.toggle ? (
        JSON.parse(props.settings.toggle) == true ? (
          <Section
            title={
              <Text bold>
                Logs
              </Text>
            }
          >
            <TextInput label="logs" settingsKey="logs" />
            <Button
              list
              label="Resync"
              onClick={() =>
                props.settingsStorage.setItem(
                  "logs",
                  JSON.stringify({ name: "Resyncing" })
                )
              }
            />
            <Button
              list
              label="Reset settings to defaults"
              onClick={() => props.settingsStorage.clear()}
            />
          </Section>
        ) : null
      ) : null}
    </Page>
  );
}

registerSettingsPage(mySettings);

// <Text bold>
//     Weather
// </Text>
// <Select label={`Temperature units`} settingsKey="tempType" options={[ {name:"Fahrenheit", value:"f"}, {name:"Celsius", value:"c"} ]} />

//             <Text bold>Treatment</Text>
//             {((props.settings.dataSource) ? ((JSON.parse(props.settings.dataSource).values[0].value == 'xdrip') ?
//             <Text>xDrip does not support treatments through API calls. maybe in the future it will!</Text> : null) : null)}
//             {((props.settings.dataSource) ? ((JSON.parse(props.settings.dataSource).values[0].value != 'xdrip') ?
//             <Toggle settingsKey="treatments" label="Enable Treatments"/> : null) : null)}
//             <Text>Tap the lower right hand side of the watch faces screen to enter treatment info.</Text>
//            {((props.settings.dataSource) ? ((JSON.parse(props.settings.dataSource).values[0].value == 'nightscout') ?
//        <TextInput label="Nightscout api secret" settingsKey="nightscoutApiSecret" /> : null) : null)}
