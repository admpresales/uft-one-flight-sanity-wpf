WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set DataTable("agentName", dtGlobalSheet) @@ hightlight id_;_1906525784_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure DataTable("password", dtGlobalSheet) ' Password = hp @@ hightlight id_;_1906528616_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1906531400_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Select "Frankfurt" @@ hightlight id_;_1906533944_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("toCity").Select "London" @@ hightlight id_;_1909767232_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1906533320_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 2,0 @@ hightlight id_;_1909758928_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1909759888_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Set "John Smith" @@ hightlight id_;_1909761328_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("ORDER").Click
wait (7) ' Wait for flight confirmation response
WpfWindow("OpenText MyFlight Sample").Check CheckPoint("OpenText MyFlight Sample Application") @@ hightlight id_;_1967714_;_script infofile_;_ZIP::ssf19.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1906473896_;_script infofile_;_ZIP::ssf17.xml_;_
wait (5) ' Wait to show New Search page
WpfWindow("OpenText MyFlight Sample").Close @@ hightlight id_;_1903338_;_script infofile_;_ZIP::ssf18.xml_;_
