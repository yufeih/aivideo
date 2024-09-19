
Read the provided tutorial and the current HTML state. Generate the next action to be performed based on the tutorial instructions and the HTML state. Provide a video transcript the next step action that describes what is happening on the screen in simple, instructional language.

The output MUST be in JSON format confirming to this TypeScript schema:

```typescript
type HtmlAction = {
  type: "click" | "input";
  transcript: string;
  /** aria-label of the target HTML element to perform the action */
  label: string;
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
<a aria-label="Skip to main content">Skip to main content</a>
<a aria-label="Show portal menu"></a>
<a>PreviewMicrosoft Azure (Preview)</a>
<a aria-label="Report a bug">Report a bug</a>
<a aria-label="Back"></a>
<a aria-label="Search resources (global)"></a>
<a aria-label="Copilot">Copilot</a>
<a aria-label="Cloud Shell"></a>
<a aria-label="Notifications"></a>
<a aria-label="Settings"></a>
<a aria-label="Support + Troubleshooting"></a>
<a aria-label="Feedback"></a>
<a aria-label="Cloud Shell">Cloud Shell</a>
<a aria-label="Notifications">Notifications</a>
<a aria-label="Settings">Settings</a>
<a aria-label="Support + Troubleshooting">Support + Troubleshooting</a>
<a aria-label="Feedback">Feedback</a>
<a aria-label="Service menu">Service menu</a>
<a aria-label="Create a resource">Create a resource</a>
<a aria-label="API Management services">API Management services</a>
<a aria-label="Storage accounts">Storage accounts</a>
<a aria-label="All resources">All resources</a>
<a aria-label="Application Insights">Application Insights</a>
<a aria-label="Key vaults">Key vaults</a>
<a aria-label="Microsoft Entra ID">Microsoft Entra ID</a>
<a aria-label="Azure OpenAI">Azure OpenAI</a>
<a aria-label="Azure Cosmos DB">Azure Cosmos DB</a>
<a aria-label="More services">More services</a>
<a aria-label="learn-api-locdev">learn-api-locdev</a>
<a aria-label="platform-api">platform-api</a>
<a aria-label="platform-api-load-test">platform-api-load-test</a>
<a aria-label="mavenstorageaccount">mavenstorageaccount</a>
<a aria-label="MSPToMavenMigrationTest">MSPToMavenMigrationTest</a>
<a aria-label="MavenReporting">MavenReporting</a>
<a aria-label="mavenreporting">mavenreporting</a>
<a aria-label="learn-api-locdev">learn-api-locdev</a>
<a aria-label="learn-api-locdev">learn-api-locdev</a>
<a aria-label="learncopilotdev-scus">learncopilotdev-scus</a>
<a aria-label="learncopilotdev-eus">learncopilotdev-eus</a>
<a aria-label="Web Dev – Development">Web Dev – Development</a>
<a>See all</a>
<a aria-label="Subscriptions">Subscriptions</a>
<a aria-label="Resource groups">Resource groups</a>
<a aria-label="All resources">All resources</a>
<a aria-label="Dashboard">Dashboard</a>
<a aria-label="Microsoft Learn">Microsoft LearnLearn Azure with free online training from Microsoft</a>
<a aria-label="Azure Monitor">Azure MonitorMonitor your apps and infrastructure</a>
<a aria-label="Microsoft Defender for Cloud">Microsoft Defender for CloudSecure your apps and infrastructure</a>
<a aria-label="Cost Management">Cost ManagementAnalyze and optimize your cloud spend for free</a>
<a>Technical Documentation</a>
<a>Azure Services</a>
<a>Recent Azure Updates</a>
<a>Azure Migration Tools</a>
<a>Find an Azure expert</a>
<a>Quickstart Center</a>
<a aria-label="Download on the App Store"></a>
<a aria-label="Get it on Google Play"></a>

Previously Performed Actions:

[]

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

```json
{
  "type": "input",
  "transcript": "To begin, let's search for 'Container Apps' in the search bar. Start by typing 'Container Apps' into the search field at the top of the portal.",
  "label": "Search resources, services, and docs (G+/)",
  "text": "Container Apps"
}
```