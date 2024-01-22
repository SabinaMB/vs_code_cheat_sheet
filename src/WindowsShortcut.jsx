import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import windows from "../src/assets/img/windows.jfif";

const WindowsShortcut = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <h1>Windows Shortcut</h1>
      <button onClick={goBack}>Go Back</button>
      <br />
      <img src={windows} alt="apple" />
      <Tabs>
        <TabList>
          <Tab>General</Tab>
          <Tab>Basic editing</Tab>
          <Tab>Navigation</Tab>
          <Tab>Search and replace</Tab>
          <Tab>Multi-cursor and selection</Tab>
          <Tab>Rich languages editing</Tab>
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
                <td>Ctrl+Shift+P, F1</td>
                <td>Show Command Palette</td>
              </tr>
              <tr>
                <td>Ctrl+P</td>
                <td>Quick Open, Go to File…</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+N</td>
                <td>Close window/instance</td>
              </tr>
              <tr>
                <td>Ctrl+,</td>
                <td>User Settings</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+S </td>
                <td>Keyboard Shortcuts</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>Ctrl+X</td>
                <td>Cut line (empty selection)</td>
              </tr>
              <tr>
                <td>Ctrl+C</td>
                <td>Copy line (empty selection)</td>
              </tr>
              <tr>
                <td>Alt+ ↑ / ↓</td>
                <td>Move line up/down</td>
              </tr>
              <tr>
                <td>Shift+Alt + ↓ / ↑</td>
                <td>Copy line up/down</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+K</td>
                <td>Delete line</td>
              </tr>
              <tr>
                <td>Ctrl+Enter</td>
                <td>Insert line below</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+Enter</td>
                <td>Insert line above</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+\</td>
                <td>Jump to matching bracket</td>
              </tr>
              <tr>
                <td>Ctrl+] / [</td>
                <td>Indent/outdent line</td>
              </tr>
              <tr>
                <td>Home / End</td>
                <td>Go to beginning/end of line</td>
              </tr>
              <tr>
                <td>Ctrl+Home</td>
                <td>Go to beginning of file</td>
              </tr>
              <tr>
                <td>Ctrl+End</td>
                <td>Go to end of file</td>
              </tr>
              <tr>
                <td>Ctrl+↑ / ↓</td>
                <td>Scroll line up/down</td>
              </tr>
              <tr>
                <td>Alt+PgUp / PgDn</td>
                <td>Scroll page up/down</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+[</td>
                <td>Fold (collapse) region</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+]</td>
                <td>Unfold (uncollapse) region</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+[</td>
                <td>Fold (collapse) all subregions</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+]</td>
                <td>Unfold (uncollapse) all subregions</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+0</td>
                <td>Fold (collapse) all regions</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+J</td>
                <td>Unfold (uncollapse) all regions</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+C</td>
                <td>Add line comment</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+U</td>
                <td>Remove line comment</td>
              </tr>
              <tr>
                <td>Ctrl+/</td>
                <td>Toggle line comment</td>
              </tr>
              <tr>
                <td>Shift+Alt+A</td>
                <td>Toggle block comment</td>
              </tr>
              <tr>
                <td>Alt+Z</td>
                <td>Toggle word wrap</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>Ctrl+T</td>
                <td>Show all Symbols</td>
              </tr>
              <tr>
                <td>Ctrl+G</td>
                <td>Go to Line...</td>
              </tr>
              <tr>
                <td>Ctrl+P</td>
                <td>Go to File...</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+O</td>
                <td>Go to Symbol...</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+M</td>
                <td>Show Problems panel</td>
              </tr>
              <tr>
                <td>F8</td>
                <td>Go to next error or warning</td>
              </tr>
              <tr>
                <td>Shift+F8</td>
                <td>Go to previous error or warning</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+Tab</td>
                <td>Navigate editor group history</td>
              </tr>
              <tr>
                <td>Alt+ ← / →</td>
                <td>Go back / forward</td>
              </tr>
              <tr>
                <td>Ctrl+M</td>
                <td>Toggle Tab moves focus</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>Ctrl+F</td>
                <td>Find</td>
              </tr>
              <tr>
                <td>Ctrl+H</td>
                <td>Replace</td>
              </tr>
              <tr>
                <td>F3 / Shift+F3</td>
                <td>Find next/previous</td>
              </tr>
              <tr>
                <td>Alt+Enter</td>
                <td>Select all occurrences of Find match</td>
              </tr>
              <tr>
                <td>Ctrl+D</td>
                <td>Add selection to next Find match</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+D</td>
                <td>Move last selection to next Find match</td>
              </tr>
              <tr>
                <td>Alt+C / R / W</td>
                <td>Toggle case-sensitive / regex / whole word</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>Alt+Click</td>
                <td>Insert cursor</td>
              </tr>
              <tr>
                <td>Ctrl+Alt+ ↑ / ↓</td>
                <td>Insert cursor above / below</td>
              </tr>
              <tr>
                <td>Ctrl+U</td>
                <td>Undo last cursor operation</td>
              </tr>
              <tr>
                <td>Shift+Alt+I</td>
                <td>Insert cursor at end of each line selected</td>
              </tr>
              <tr>
                <td>Ctrl+L</td>
                <td>Select current line</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+L</td>
                <td>Select all occurrences of current selection</td>
              </tr>
              <tr>
                <td>Ctrl+F2</td>
                <td>Select all occurrences of current word</td>
              </tr>
              <tr>
                <td>Shift+Alt+→</td>
                <td>Expand selection</td>
              </tr>
              <tr>
                <td>Shift+Alt+←</td>
                <td>Shrink selection</td>
              </tr>
              <tr>
                <td>Shift+Alt + (drag mouse)</td>
                <td>Column (box) selection</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+Alt + (arrow key)</td>
                <td>Column (box) selection</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+Alt + PgUp/PgDn</td>
                <td>Column (box) selection page up/down</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>Ctrl+Space, Ctrl+I</td>
                <td>Trigger suggestion</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+Space</td>
                <td>Trigger parameter hints</td>
              </tr>
              <tr>
                <td>Shift+Alt+F</td>
                <td>Format document</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+F</td>
                <td>Format selection</td>
              </tr>
              <tr>
                <td>F12</td>
                <td>Go to Definition</td>
              </tr>
              <tr>
                <td>Alt+F12</td>
                <td>Peek Definition</td>
              </tr>
              <tr>
                <td>Ctrl+K F12</td>
                <td>Open Definition to the side</td>
              </tr>
              <tr>
                <td>Ctrl+.</td>
                <td>Quick Fix</td>
              </tr>
              <tr>
                <td>Shift+F12</td>
                <td>Show References</td>
              </tr>
              <tr>
                <td>F2</td>
                <td>Rename Symbol</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+X</td>
                <td>Trim trailing whitespace</td>
              </tr>
              <tr>
                <td>Ctrl+K M</td>
                <td>Change file language</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>Ctrl+F4, Ctrl+W</td>
                <td>Close editor</td>
              </tr>
              <tr>
                <td>Ctrl+K F</td>
                <td>Close folder</td>
              </tr>
              <tr>
                <td>Ctrl+\</td>
                <td>Split editor</td>
              </tr>
              <tr>
                <td>Ctrl+1 / 2 / 3</td>
                <td>Focus into 1st, 2nd or 3rd editor group</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+ ←/→</td>
                <td>Focus into previous/next editor group</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+PgUp / PgDn</td>
                <td>Move editor left/right</td>
              </tr>
              <tr>
                <td>Ctrl+K ← / →</td>
                <td>Move active editor group</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>Ctrl+N</td>
                <td>New File</td>
              </tr>
              <tr>
                <td>Ctrl+O</td>
                <td>Open File...</td>
              </tr>
              <tr>
                <td>Ctrl+S</td>
                <td>Save</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+S</td>
                <td>Save As...</td>
              </tr>
              <tr>
                <td>Ctrl+K S</td>
                <td>Save All</td>
              </tr>
              <tr>
                <td>Ctrl+F4</td>
                <td>Close</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+W</td>
                <td>Close All</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+T</td>
                <td>Reopen closed editor</td>
              </tr>
              <tr>
                <td>Ctrl+K Enter</td>
                <td>Keep preview mode editor open</td>
              </tr>
              <tr>
                <td>Ctrl+Tab</td>
                <td>Open next</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+Tab</td>
                <td>Open previous</td>
              </tr>
              <tr>
                <td>Ctrl+K P</td>
                <td>Copy path of active file</td>
              </tr>
              <tr>
                <td>Ctrl+K R</td>
                <td>Reveal active file in Explorer</td>
              </tr>
              <tr>
                <td>Ctrl+K O</td>
                <td>Show active file in new window/instance</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>F11</td>
                <td>Toggle full screen</td>
              </tr>
              <tr>
                <td>Shift+Alt+0</td>
                <td>Toggle editor layout (horizontal/vertical)</td>
              </tr>
              <tr>
                <td>Ctrl+ = / -</td>
                <td>Zoom in/out</td>
              </tr>
              <tr>
                <td>Ctrl+B</td>
                <td>Toggle Sidebar visibility</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+E</td>
                <td>Show Explorer / Toggle focus</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+F</td>
                <td>Show Search</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+G</td>
                <td>Show Source Control</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+D</td>
                <td>Show Debug</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+X</td>
                <td>Show Extensions</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+H</td>
                <td>Replace in files</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+J</td>
                <td>Toggle Search details</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+U</td>
                <td>Show Output panel</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+V</td>
                <td>Open Markdown preview</td>
              </tr>
              <tr>
                <td>Ctrl+K V</td>
                <td>Open Markdown preview to the side</td>
              </tr>
              <tr>
                <td>Ctrl+K Z</td>
                <td>Zen Mode (Esc Esc to exit)</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>F9</td>
                <td>Toggle breakpoint</td>
              </tr>
              <tr>
                <td>F5</td>
                <td>Start/Continue</td>
              </tr>
              <tr>
                <td>Shift+F5</td>
                <td>Stop</td>
              </tr>
              <tr>
                <td>F11 / Shift+F11</td>
                <td>Step into/out</td>
              </tr>
              <tr>
                <td>F10</td>
                <td>Step over</td>
              </tr>
              <tr>
                <td>Ctrl+K Ctrl+I</td>
                <td>Show hover</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
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
                <td>Ctrl+`</td>
                <td>Show integrated terminal</td>
              </tr>
              <tr>
                <td>Ctrl+Shift+`</td>
                <td>Create new terminal</td>
              </tr>
              <tr>
                <td>Ctrl+C</td>
                <td>Copy selection</td>
              </tr>
              <tr>
                <td>Ctrl+V</td>
                <td>Paste into active terminal</td>
              </tr>
              <tr>
                <td>Ctrl+↑ / ↓</td>
                <td>Scroll up/down</td>
              </tr>
              <tr>
                <td>Shift+PgUp / PgDn</td>
                <td>Scroll page up/down</td>
              </tr>
              <tr>
                <td>Ctrl+Home / End</td>
                <td>Scroll to top/bottom</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WindowsShortcut;
