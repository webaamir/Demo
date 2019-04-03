import { CurrencyInputComponent } from "./currency-input/currency-input.component";
import { EmailInputComponent } from "./email-input/email-input.component";
import { PhoneInputComponent } from "./phone-input/phone-input.component";
import { CellInputComponent } from "./cell-input/cell-input.component";
import { DateInputComponent } from "./date-input/date-input.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { UserSelectionComponent } from "./user-selection/user-selection.component";
import { concatenatePipe } from "./pipes/string.concatenate-pipe";
import { ListLookupDialogComponent } from "./list-lookup/list-lookup.component";
import { LdapLookupComponent } from "./lookup-user/ldap-lookup.component";
import { BaseComponent } from "./base-component/base.component";
import { SortPipe } from "./pipes/sort-pipe";
import { DateFormatPipe } from "./pipes/date-format-pipe";
import { MessageBarComponent } from "./message-bar/message-bar.component";

export const SHARED_COMPONENTS_LIST = [ CurrencyInputComponent, EmailInputComponent, ListLookupDialogComponent, 
                                        PhoneInputComponent, CellInputComponent, DateInputComponent,
                                        BaseComponent,
                                        UserInputComponent , UserSelectionComponent , concatenatePipe,
                                        LdapLookupComponent , SortPipe , DateFormatPipe, MessageBarComponent
                                ];