import apple from "../public/apple.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


const MacShortcut = () => {


  const goBack = () => {
    window.history.back();
  };


  return (
    <div>
      <h1>MacShortcut</h1>
      <button onClick={goBack}>Go Back</button><br />
      <img src={apple} alt="apple" />
      <Tabs>
        <TabList>
          <Tab>General</Tab>
          <Tab>Basic editing</Tab>
          <Tab>Multi-cursor and selection</Tab>
          <Tab>Search and replace</Tab>
          <Tab>Rich languages editing</Tab>
          <Tab>Navigation</Tab>
          <Tab>Editor management</Tab>
          <Tab>File management</Tab>
          <Tab>Display</Tab>
          <Tab>Debug</Tab>
          <Tab>Integrated terminal</Tab>
        </TabList>

        <TabPanel>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⇧⌘P, F1</td>
                <td>Show Command Palette</td>
              </tr>
              <tr>
                <td>⌘P</td>
                <td>Quick Open, Go to File…</td>
              </tr>
              <tr>
                <td>⇧⌘N</td>
                <td>New window/instance</td>
              </tr>
              <tr>
                <td>⌘W</td>
                <td>Close window/instance</td>
              </tr>
              <tr>
                <td>⌘,</td>
                <td>User Settings</td>
              </tr>
              <tr>
                <td>⌘K ⌘S </td>
                <td>Keyboard Shortcuts</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⌘X</td>
                <td>Cut line (empty selection)</td>
              </tr>
              <tr>
                <td>⌘C</td>
                <td>Copy line (empty selection)</td>
              </tr>
              <tr>
                <td>⌥↓ / ⌥↑</td>
                <td>Move line down/up</td>
              </tr>
              <tr>
                <td>⇧⌥↓ / ⇧⌥↑</td>
                <td>Copy line down/up</td>
              </tr>
              <tr>
                <td>⇧⌘K</td>
                <td>Delete line</td>
              </tr>
              <tr>
                <td>⌘Enter / ⇧⌘Enter</td>
                <td>Insert line below/above</td>
              </tr>
              <tr>
                <td>⇧⌘\</td>
                <td>Jump to matching bracket</td>
              </tr>
              <tr>
                <td>⌘] / ⌘[</td>
                <td>Indent/outdent line</td>
              </tr>
              <tr>
                <td>Home / End</td>
                <td>Go to beginning/end of line</td>
              </tr>
              <tr>
                <td>⌘↑ / ⌘↓</td>
                <td>Go to beginning/end of file</td>
              </tr>
              <tr>
                <td>⌃PgUp / ⌃PgDn</td>
                <td>Scroll line up/down</td>
              </tr>
              <tr>
                <td>⌘PgUp /⌘PgDn</td>
                <td>Scroll page up/down</td>
              </tr>
              <tr>
                <td>⌥⌘[ / ⌥⌘]</td>
                <td>Fold/unfold region</td>
              </tr>
              <tr>
                <td>⌘K ⌘[ / ⌘K ⌘]</td>
                <td>Fold/unfold all subregions</td>
              </tr>
              <tr>
                <td>⌘K ⌘0 / ⌘K ⌘J</td>
                <td>Fold/unfold all regions</td>
              </tr>
              <tr>
                <td>⌘K ⌘C</td>
                <td>Add line comment</td>
              </tr>
              <tr>
                <td>⌘K ⌘U</td>
                <td>Remove line comment</td>
              </tr>
              <tr>
                <td>⌘/</td>
                <td>Toggle line comment</td>
              </tr>
              <tr>
                <td>⇧⌥A</td>
                <td>Toggle block comment</td>
              </tr>
              <tr>
                <td>⌥Z</td>
                <td>Toggle word wrap</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⌥ + click</td>
                <td>Insert cursor</td>
              </tr>
              <tr>
                <td>⌥⌘↑</td>
                <td>Insert cursor above</td>
              </tr>
              <tr>
                <td>⌥⌘↓</td>
                <td>Insert cursor below</td>
              </tr>
              <tr>
                <td>⌘U</td>
                <td>Undo last cursor operation</td>
              </tr>
              <tr>
                <td>⇧⌥I</td>
                <td>Insert cursor at end of each line selected</td>
              </tr>
              <tr>
                <td>⌘L</td>
                <td>Select current line</td>
              </tr>
              <tr>
                <td>⇧⌘L</td>
                <td>Select all occurrences of current selection</td>
              </tr>
              <tr>
                <td>⌘F2</td>
                <td>Select all occurrences of current word</td>
              </tr>
              <tr>
                <td>⌃⇧⌘→ / ←</td>
                <td>Expand / shrink selection</td>
              </tr>
              <tr>
                <td>⇧⌥ + drag mouse</td>
                <td>Column (box) selection</td>
              </tr>
              <tr>
                <td>⇧⌥⌘↑ / ↓</td>
                <td>Column (box) selection up/down</td>
              </tr>
              <tr>
                <td>⇧⌥⌘← / →</td>
                <td>Column (box) selection left/right</td>
              </tr>
              <tr>
                <td>⇧⌥⌘PgUp</td>
                <td>Column (box) selection page up</td>
              </tr>
              <tr>
                <td>⇧⌥⌘PgDn</td>
                <td>Column (box) selection page down</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⌘F</td>
                <td>Find</td>
              </tr>
              <tr>
                <td>⌥⌘F</td>
                <td>Replace</td>
              </tr>
              <tr>
                <td>⌘G / ⇧⌘G</td>
                <td>Find next/previous</td>
              </tr>
              <tr>
                <td>⌥Enter</td>
                <td>Select all occurrences of Find match</td>
              </tr>
              <tr>
                <td>⌘D</td>
                <td>Add selection to next Find match</td>
              </tr>
              <tr>
                <td>⌘K ⌘D</td>
                <td>Move last selection to next Find match</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⌃Space, ⌘I</td>
                <td>Trigger suggestion</td>
              </tr>
              <tr>
                <td>⇧⌘Space</td>
                <td>Trigger parameter hints</td>
              </tr>
              <tr>
                <td>⇧⌥F</td>
                <td>Format document</td>
              </tr>
              <tr>
                <td>⌘K ⌘F</td>
                <td>Format selection</td>
              </tr>
              <tr>
                <td>F12</td>
                <td>Go to Definition</td>
              </tr>
              <tr>
                <td>⌥F12</td>
                <td>Peek Definition</td>
              </tr>
              <tr>
                <td>⌘K F12</td>
                <td>Open Definition to the side</td>
              </tr>
              <tr>
                <td>⌘.</td>
                <td>Quick Fix</td>
              </tr>
              <tr>
                <td>⇧F12</td>
                <td>Show References</td>
              </tr>
              <tr>
                <td>F2</td>
                <td>Rename Symbol</td>
              </tr>
              <tr>
                <td>⌘K ⌘X</td>
                <td>Trim trailing whitespace</td>
              </tr>
              <tr>
                <td>⌘K M</td>
                <td>Change file language</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⌘T</td>
                <td>Show all Symbols</td>
              </tr>
              <tr>
                <td>⌃G</td>
                <td>Go to Line...</td>
              </tr>
              <tr>
                <td>⌘P</td>
                <td>Go to File...</td>
              </tr>
              <tr>
                <td>⇧⌘O</td>
                <td>Go to Symbol...</td>
              </tr>
              <tr>
                <td>⇧⌘M</td>
                <td>Show Problems panel</td>
              </tr>
              <tr>
                <td>F8 / ⇧F8</td>
                <td>Go to next/previous error or warning</td>
              </tr>
              <tr>
                <td>⌃⇧Tab</td>
                <td>Navigate editor group history</td>
              </tr>
              <tr>
                <td>⌃- / ⌃⇧-</td>
                <td>Go back/forward</td>
              </tr>
              <tr>
                <td>⌃⇧M</td>
                <td>Toggle Tab moves focus</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⌘W</td>
                <td>Close editor</td>
              </tr>
              <tr>
                <td>⌘K F</td>
                <td>Close folder</td>
              </tr>
              <tr>
                <td>⌘\</td>
                <td>Split editor</td>
              </tr>
              <tr>
                <td>⌘1 / ⌘2 / ⌘3</td>
                <td>Focus into 1st, 2nd, 3rd editor group</td>
              </tr>
              <tr>
                <td>⌘K ⌘← / ⌘K ⌘→</td>
                <td>Focus into previous/next editor group</td>
              </tr>
              <tr>
                <td>⌘K ⇧⌘← / ⌘K ⇧⌘→</td>
                <td>Move editor left/right</td>
              </tr>
              <tr>
                <td>⌘K ← / ⌘K →</td>
                <td>Move active editor group</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⌘N</td>
                <td>New File</td>
              </tr>
              <tr>
                <td>⌘O</td>
                <td>Open File...</td>
              </tr>
              <tr>
                <td>⌘S</td>
                <td>Save</td>
              </tr>
              <tr>
                <td>⇧⌘S</td>
                <td>Save As...</td>
              </tr>
              <tr>
                <td>⌥⌘S</td>
                <td>Save All</td>
              </tr>
              <tr>
                <td>⌘W</td>
                <td>Close</td>
              </tr>
              <tr>
                <td>⌘K ⌘W</td>
                <td>Close All</td>
              </tr>
              <tr>
                <td>⇧⌘T</td>
                <td>Reopen closed editor</td>
              </tr>
              <tr>
                <td>⌘K Enter</td>
                <td>Keep preview mode editor open</td>
              </tr>
              <tr>
                <td>⌃Tab / ⌃⇧Tab</td>
                <td>Open next / previous</td>
              </tr>
              <tr>
                <td>⌘K P</td>
                <td>Copy path of active file</td>
              </tr>
              <tr>
                <td>⌘K R</td>
                <td>Reveal active file in Finder</td>
              </tr>
              <tr>
                <td>⌘K O</td>
                <td>Show active file in new window/instance</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⌃⌘F</td>
                <td>Toggle full screen</td>
              </tr>
              <tr>
                <td>⌥⌘0</td>
                <td>Toggle editor layout (horizontal/vertical)</td>
              </tr>
              <tr>
                <td>⌘= / ⇧⌘-</td>
                <td>Zoom in/out</td>
              </tr>
              <tr>
                <td>⌘B</td>
                <td>Toggle Sidebar visibility</td>
              </tr>
              <tr>
                <td>⇧⌘E</td>
                <td>Show Explorer / Toggle focus</td>
              </tr>
              <tr>
                <td>⇧⌘F</td>
                <td>Show Search</td>
              </tr>
              <tr>
                <td>⌃⇧G</td>
                <td>Show Source Control</td>
              </tr>
              <tr>
                <td>⇧⌘D</td>
                <td>Show Debug</td>
              </tr>
              <tr>
                <td>⇧⌘X</td>
                <td>Show Extensions</td>
              </tr>
              <tr>
                <td>⇧⌘H</td>
                <td>Replace in files</td>
              </tr>
              <tr>
                <td>⇧⌘J</td>
                <td>Toggle Search details</td>
              </tr>
              <tr>
                <td>⇧⌘U</td>
                <td>Show Output panel</td>
              </tr>
              <tr>
                <td>⇧⌘V</td>
                <td>Open Markdown preview</td>
              </tr>
              <tr>
                <td>⌘K V</td>
                <td>Open Markdown preview to the side</td>
              </tr>
              <tr>
                <td>⌘K Z</td>
                <td>Zen Mode (Esc Esc to exit)</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>F9</td>
                <td>Toggle breakpoint</td>
              </tr>
              <tr>
                <td>F5</td>
                <td>Start/Continue</td>
              </tr>
              <tr>
                <td>F11 / ⇧F11</td>
                <td>Step into/ out</td>
              </tr>
              <tr>
                <td>F10</td>
                <td>Step over</td>
              </tr>
              <tr>
                <td>⇧F5</td>
                <td>Stop</td>
              </tr>
              <tr>
                <td>⌘K ⌘I</td>
                <td>Show hover</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table>
            <thead>
              <tr>
                <th>Shortcut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⌃`</td>
                <td>Show integrated terminal</td>
              </tr>
              <tr>
                <td>⌃⇧`</td>
                <td>Create new terminal</td>
              </tr>
              <tr>
                <td>⌘C</td>
                <td>Copy selection</td>
              </tr>
              <tr>
                <td>⌘↑ / ↓</td>
                <td>Scroll up/down</td>
              </tr>
              <tr>
                <td>PgUp / PgDn</td>
                <td>Scroll page up/down</td>
              </tr>
              <tr>
                <td>⌘Home / End</td>
                <td>Scroll to top/bottom</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
      </Tabs>

    </div>
  );
}

export default MacShortcut;