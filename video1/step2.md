
Read the provided tutorial and the current HTML state. Generate the next action to be performed based on the tutorial instructions and the HTML state. Provide a video transcript the next step action that describes what is happening on the screen in simple, instructional language.

The output MUST be in JSON format confirming to this TypeScript schema:

```typescript
type HtmlAction = {
  type: "click" | "input";
  transcript: string;
  /** aria-label of the target HTML element to perform the action */
  label?: string;
  /** href of the target HTML element to perform the action */
  href?: string;
  /** Text to type if action type is 'input' */
  text?: string;
};
```

Current HTML State:
<input aria-label="Search resources, services, and docs (G+/)" placeholder="Search resources, services, and docs (G+/)">
<button aria-label="More portal tools"></button>
<button aria-label="Account menu Currently signed in as yufeih@microsoft.com, under Microsoft (microsoft.onmicrosoft.com) tenant">yufeih@microsoft.comMicrosoft (microsoft.onmicrosoft.com)</button>
<button aria-label="Hide portal menu"></button>
<button>Select resources to favorite</button>
<a href="#" aria-label="Skip to main content">Skip to main content</a>
<a href="#" aria-label="Show portal menu"></a>
<a href="#home">PreviewMicrosoft Azure (Preview)</a>
<a href="#" aria-label="Report a bug">Report a bug</a>
<a href="#" aria-label="Back"></a>
<a href="#" aria-label="Search resources (global)"></a>
<a aria-label="See more">See more</a>
<a href="#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.App%2FmanagedEnvironments">Container Apps Environments</a>
<a href="#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.App%2FcontainerApps">Container Apps</a>
<a href="#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Web%2Fsites">App Services</a>
<a href="#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.App%2Fjobs">Container App Jobs</a>
<a aria-label="See more">See more</a>
<a href="#create/Microsoft.ContainerApp">Container App</a>
<a href="#create/Microsoft.ContainerAppJobs">Container App Job</a>
<a href="#create/Microsoft.ContainerAppSessionPool">Container App Session Pool</a>
<a href="#create/Microsoft.AppSpaces">App Spaces (Preview)</a>
<a aria-label="See more">See more</a>
<a href="https://learn.microsoft.com/en-us/azure/container-apps/quickstart-portal?wt.mc_id=searchAPI_azureportal_inproduct_rmskilling&amp;sessionId=34cd4ff1a8e0440fbe28d44ee77494af">Quickstart: Deploy your first container app using the Azure portal</a>
<a href="https://learn.microsoft.com/en-us/azure/developer/python/containers-in-azure-overview-python?wt.mc_id=searchAPI_azureportal_inproduct_rmskilling&amp;sessionId=34cd4ff1a8e0440fbe28d44ee77494af">Overview of Python Container Apps in Azure - Python on Azure</a>
<a href="https://learn.microsoft.com/en-us/azure/container-apps/jobs?wt.mc_id=searchAPI_azureportal_inproduct_rmskilling&amp;sessionId=34cd4ff1a8e0440fbe28d44ee77494af">Jobs in Azure Container Apps</a>
<a href="https://learn.microsoft.com/en-us/azure/container-apps/quickstart-code-to-cloud?wt.mc_id=searchAPI_azureportal_inproduct_rmskilling&amp;sessionId=34cd4ff1a8e0440fbe28d44ee77494af">Quickstart: Build and deploy your app from your local filesystem to Azure Container Apps</a>
<a aria-label="See more">See more</a>
<a href="https://ms.portal.azure.com#blade/Microsoft_AAD_IAM/GroupDetailsMenuBlade/Overview/groupId/a57445c4-1c04-41f9-a275-6410554a9518">Container AppsGroupWorkerApps@service.microsoft.com</a>
<a href="https://ms.portal.azure.com#blade/Microsoft_AAD_IAM/GroupDetailsMenuBlade/Overview/groupId/0e242ef4-a416-46ff-aba9-4e6422f3c9cd">Container Apps Shanghai ExtendedGroupcappsh-ext@microsoft.com</a>
<a href="https://ms.portal.azure.com#blade/Microsoft_AAD_IAM/GroupDetailsMenuBlade/Overview/groupId/135885e8-0577-4e28-b7ad-bfe6a5c83e4a">Container Apps Champs CommunityGroupContainerAppsChampCommunity@service.microsoft.com</a>
<a href="https://ms.portal.azure.com#blade/Microsoft_AAD_IAM/GroupDetailsMenuBlade/Overview/groupId/1cce38b9-07a5-4fb8-842d-abe3bbbff140">Container Apps Dashboard ReadersGroupcappsdash@microsoft.com</a>
<a href="">Continue searching in Microsoft Entra ID</a>
<a href="#menu/subscriptions">Change</a>
<a aria-label="Give feedback"></a>
<a aria-label="Give feedback">Give feedback</a>
<a href="#" aria-label="Copilot">Copilot</a>
<a href="#" aria-label="Cloud Shell"></a>
<a href="#" aria-label="Notifications"></a>
<a href="#" aria-label="Settings"></a>
<a href="#" aria-label="Support + Troubleshooting"></a>
<a href="#" aria-label="Feedback"></a>
<a href="#" aria-label="Cloud Shell">Cloud Shell</a>
<a href="#" aria-label="Notifications">Notifications</a>
<a href="#" aria-label="Settings">Settings</a>
<a href="#" aria-label="Support + Troubleshooting">Support + Troubleshooting</a>
<a href="#" aria-label="Feedback">Feedback</a>
<a href="#" aria-label="Service menu">Service menu</a>
<a aria-label="Create a resource" href="#create/hub">Create a resource</a>
<a href="#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.ApiManagement%2Fservice" aria-label="API Management services">API Management services</a>
<a href="#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Storage%2FStorageAccounts" aria-label="Storage accounts">Storage accounts</a>
<a href="#blade/HubsExtension/BrowseAll" aria-label="All resources">All resources</a>
<a href="#blade/HubsExtension/BrowseResourceBlade/resourceType/microsoft.insights%2Fcomponents" aria-label="Application Insights">Application Insights</a>
<a href="#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.KeyVault%2Fvaults" aria-label="Key vaults">Key vaults</a>
<a href="#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade" aria-label="Microsoft Entra ID">Microsoft Entra ID</a>
<a href="#blade/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/OpenAI" aria-label="Azure OpenAI">Azure OpenAI</a>
<a href="#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.DocumentDb%2FdatabaseAccounts" aria-label="Azure Cosmos DB">Azure Cosmos DB</a>
<a href="#allservices" aria-label="More services">More services</a>
<a aria-label="learn-api-locdev" href="#@microsoft.onmicrosoft.com/asset/Microsoft_Azure_ApiManagement/Service/subscriptions/fef9897e-e4c6-451a-9e2e-850f9876fdc7/resourceGroups/platform-api/providers/Microsoft.ApiManagement/service/learn-api-locdev">learn-api-locdev</a>
<a aria-label="platform-api" href="#@microsoft.onmicrosoft.com/asset/HubsExtension/ResourceGroups/subscriptions/fef9897e-e4c6-451a-9e2e-850f9876fdc7/resourceGroups/platform-api">platform-api</a>
<a aria-label="platform-api-load-test" href="#@microsoft.onmicrosoft.com/asset/Microsoft_Azure_CloudNativeTesting/CloudNativeTesting/subscriptions/fef9897e-e4c6-451a-9e2e-850f9876fdc7/resourceGroups/platform-api/providers/Microsoft.LoadTestService/loadtests/platform-api-load-test">platform-api-load-test</a>
<a aria-label="mavenstorageaccount" href="#@microsoft.onmicrosoft.com/asset/Microsoft_Azure_Storage/StorageAccount/subscriptions/d483e957-13ce-4cea-9738-e04b06c97a70/resourceGroups/API/providers/Microsoft.Storage/storageAccounts/mavenstorageaccount">mavenstorageaccount</a>
<a aria-label="MSPToMavenMigrationTest" href="#@microsoft.onmicrosoft.com/asset/Microsoft_Azure_DataFactory/DataFactoryv2/subscriptions/d483e957-13ce-4cea-9738-e04b06c97a70/resourceGroups/MavenReporting/providers/Microsoft.DataFactory/factories/MSPToMavenMigrationTest">MSPToMavenMigrationTest</a>
<a aria-label="MavenReporting" href="#@microsoft.onmicrosoft.com/asset/SqlAzureExtension/Database/subscriptions/d483e957-13ce-4cea-9738-e04b06c97a70/resourceGroups/MavenReporting/providers/Microsoft.Sql/servers/mavenlocal/databases/MavenReporting">MavenReporting</a>
<a aria-label="mavenreporting" href="#@microsoft.onmicrosoft.com/asset/Microsoft_Azure_AnalysisServices/AnalysisServices/subscriptions/d483e957-13ce-4cea-9738-e04b06c97a70/resourceGroups/MavenReporting/providers/Microsoft.AnalysisServices/servers/mavenreporting">mavenreporting</a>
<a aria-label="learn-api-locdev" href="#@microsoft.onmicrosoft.com/asset/AppInsightsExtension/ApplicationInsights/subscriptions/fef9897e-e4c6-451a-9e2e-850f9876fdc7/resourceGroups/platform-api/providers/Microsoft.Insights/components/learn-api-locdev">learn-api-locdev</a>
<a aria-label="learn-api-locdev" href="#@microsoft.onmicrosoft.com/asset/Microsoft_OperationsManagementSuite_Workspace/Workspace/subscriptions/fef9897e-e4c6-451a-9e2e-850f9876fdc7/resourceGroups/platform-api/providers/Microsoft.OperationalInsights/workspaces/learn-api-locdev">learn-api-locdev</a>
<a aria-label="learncopilotdev-scus" href="#@microsoft.onmicrosoft.com/asset/Microsoft_Azure_ProjectOxford/CognitiveServicesAccount/subscriptions/8787b32c-9907-4a8f-9fca-dd14d49e02de/resourceGroups/learncopilot-dev/providers/Microsoft.CognitiveServices/accounts/learncopilotdev-scus">learncopilotdev-scus</a>
<a aria-label="learncopilotdev-eus" href="#@microsoft.onmicrosoft.com/asset/Microsoft_Azure_ProjectOxford/CognitiveServicesAccount/subscriptions/8787b32c-9907-4a8f-9fca-dd14d49e02de/resourceGroups/learncopilot-dev/providers/Microsoft.CognitiveServices/accounts/learncopilotdev-eus">learncopilotdev-eus</a>
<a aria-label="Web Dev – Development" href="#@microsoft.onmicrosoft.com/asset/Microsoft_Azure_Billing/Subscription/subscriptions/8787b32c-9907-4a8f-9fca-dd14d49e02de">Web Dev – Development</a>
<a href="#blade/HubsExtension/RecentResources.ReactView">See all</a>
<a href="#blade/Microsoft_Azure_Billing/SubscriptionsBlade" aria-label="Subscriptions">Subscriptions</a>
<a href="#blade/HubsExtension/BrowseResourceGroupBlade/resourceType/Microsoft.Resources%2Fsubscriptions%2FresourceGroups" aria-label="Resource groups">Resource groups</a>
<a href="#blade/HubsExtension/BrowseAll" aria-label="All resources">All resources</a>
<a href="#dashboard" aria-label="Dashboard">Dashboard</a>
<a href="https://aka.ms/homemslearn" aria-label="Microsoft Learn">Microsoft LearnLearn Azure with free online training from Microsoft</a>
<a href="#blade/Microsoft_Azure_Monitoring/AzureMonitoringBrowseBlade" aria-label="Azure Monitor">Azure MonitorMonitor your apps and infrastructure</a>
<a href="#blade/Microsoft_Azure_Security/SecurityMenuBlade" aria-label="Microsoft Defender for Cloud">Microsoft Defender for CloudSecure your apps and infrastructure</a>
<a href="#blade/Microsoft_Azure_CostManagement/Menu/openedBy/AzurePortal" aria-label="Cost Management">Cost ManagementAnalyze and optimize your cloud spend for free</a>
<a href="https://aka.ms/hometechnicaldocumentation">Technical Documentation</a>
<a href="https://go.microsoft.com/fwlink/?linkid=2009591">Azure Services</a>
<a href="https://go.microsoft.com/fwlink/?linkid=2043134">Recent Azure Updates</a>
<a href="#blade/Microsoft_Azure_Migrate/AmhResourceMenuBlade/overview">Azure Migration Tools</a>
<a href="#blade/Microsoft_Azure_CustomerHub/ServiceProvidersBlade/overview">Find an Azure expert</a>
<a href="#blade/Microsoft_Azure_Resources/QuickstartCenterBlade">Quickstart Center</a>
<a aria-label="Download on the App Store" href="https://itunes.apple.com/app/microsoft-azure/id1219013620?ls=1&amp;mt=8"></a>
<a aria-label="Get it on Google Play" href="https://play.google.com/store/apps/details?id=com.microsoft.azure"></a>
<label>Use 'Space' or 'Enter' key to enable edit mode</label>
<label>Use 'Space' or 'Enter' key to enable edit mode</label>

Previously Performed Actions:

[{
  "type": "input",
  "transcript": "To begin, let's search for 'Container Apps' in the search bar. Start by typing 'Container Apps' into the search field at the top of the portal.",
  "label": "Search resources, services, and docs (G+/)",
  "text": "Container Apps"
}]

Input tutorial:

# Quickstart: Deploy your first container app using the Azure portal

Azure Container Apps enables you to run microservices and containerized applications on a serverless platform. With Container Apps, you enjoy the benefits of running containers while leaving behind the concerns of manually configuring cloud infrastructure and complex container orchestrators.

In this quickstart, you create a secure Container Apps environment and deploy your first container app using the Azure portal.

## Setup

Begin by signing in to the [Azure portal](https://portal.azure.com).

## Create a container app

To create your container app, start at the Azure portal home page.

1. Search for **Container Apps** in the top search bar.

1. Select **Container Apps** in the search results.

1. Select the **Create** button.

### Basics tab

In the _Basics_ tab, do the following actions.

1. Enter the following values in the _Project details_ section.

   | Setting            | Action                                                 |
   | ------------------ | ------------------------------------------------------ |
   | Subscription       | Select your Azure subscription.                        |
   | Resource group     | Select **Create new** and enter **my-container-apps**. |
   | Container app name | Enter **my-container-app**.                            |
   | Deployment source  | Select **Container image**.                            |

1. Enter the following values in the "Container Apps Environment" section.

   | Setting                    | Action                    |
   | -------------------------- | ------------------------- |
   | Region                     | Select a region near you. |
   | Container Apps Environment | Use the default value.    |

1. Select the **Container** tab.

1. Select _Use quickstart image_.

### Deploy the container app

1. Select **Review and create** at the bottom of the page.

   If no errors are found, the _Create_ button is enabled.

   If there are errors, any tab containing errors is marked with a red dot. Navigate to the appropriate tab. Fields containing an error are highlighted in red. Once all errors are fixed, select **Review and create** again.

1. Select **Create**.

   A page with the message _Deployment is in progress_ is displayed. Once the deployment is successfully completed, you see the message: _Your deployment is complete_.

### Verify deployment

Select **Go to resource** to view your new container app.

Select the link next to _Application URL_ to view your application. The following message appears in your browser.

## Clean up resources

If you're not going to continue to use this application, you can delete the container app and all the associated services by removing the resource group.

1. Select the **my-container-apps** resource group from the _Overview_ section.
1. Select the **Delete resource group** button at the top of the resource group _Overview_.
1. Enter the resource group name **my-container-apps** in the _Are you sure you want to delete "my-container-apps"_ confirmation dialog.
1. Select **Delete**.

   The process to delete the resource group could take a few minutes to complete.

---

{
  "type": "click",
  "transcript": "Now, let's select 'Container Apps' from the search results to move forward with creating the container app. Click on 'Container Apps' in the list of search results.",
  "label": "Container Apps"
}