
Read the provided tutorial and the current HTML state. Generate the next action to be performed based on the tutorial instructions and the HTML state. Provide a video transcript the next step action that describes what is happening on the screen in simple, instructional language.

The output MUST be in JSON format confirming to this TypeScript schema:

```typescript
type HtmlAction = {
  type: "click" | "input";
  transcript: string;
  /** ID of the target HTML element to perform the action */
  id?: string;
  /** aria-label of the target HTML element to perform the action */
  ariaLabel?: string;
  /** href of the target HTML element to perform the action */
  href?: string;
  /** Text to type if action type is 'input' */
  text?: string;
};
```

Current HTML State:

<input id="TextField37" aria-label="Container app name">
<input id="ChoiceGroup145-ContainerImage">
<input id="ChoiceGroup145-SourceOrArtifact">
<input id="checkbox-288" aria-label="Show environments in all regions">
<input id="checkbox-53" aria-label="Use quickstart image">
<input id="TextField57" aria-label="Name">
<input id="ChoiceGroup65-acr">
<input id="ChoiceGroup65-nonAcr">
<input id="TextField86" placeholder="Example: /bin/bash" aria-label="Command override">
<input id="TextField94" placeholder="Example: -c, while true; do echo hello; sleep 10; done" aria-label="Arguments override">
<input id="name-0" placeholder="Enter name" aria-label="Name">
<input id="value-0" placeholder="Enter value" aria-label="Value">
<input id="newResourceGroupName">
<button id="Pivot3-Tab0"> Basics</button>
<button id="Pivot3-Tab1"> Container</button>
<button><i></i></button>
<button id="CreateNewResourceGroup">Create new</button>
<button id="environment-create">Create new</button>
<button><span id="id__137">Next : Container &gt;</button>
<button><span id="id__115">Cancel</button>
<a href="https://go.microsoft.com/fwlink/?linkid=2178208">Learn more</a>
<a href="https://go.microsoft.com/fwlink/?linkid=2194312">Container Apps Pricing</a>
<a href="https://go.microsoft.com/fwlink/?linkid=2209014">Learn more</a>
<label id="label26" aria-label="Subscription">Subscription</label>
<label id="label30" aria-label="Resource group">Resource group</label>
<label id="label34" aria-label="Container app name">Container app name</label>
<label id="label142" aria-label="Deployment source">Deployment source</label>
<label><span id="ChoiceGroupLabel146-ContainerImage">Container image<div id="ChoiceGroupLabel146-ContainerImage" aria-label="Container image: Bring your own container registry or build a container from a Dockerfile">Bring your own container registry or build a container from a Dockerfile</label>
<label><span id="ChoiceGroupLabel146-SourceOrArtifact">Source code or artifact<div id="ChoiceGroupLabel146-SourceOrArtifact" aria-label="Source code or artifact: Build and deploy your code without using a Dockerfile">Build and deploy your code without using a Dockerfile</label>
<label id="label285" aria-label="Show environments in all regions">Show environments in all regions</label>
<label><i></i></label>
<label id="label289" aria-label="Region">Region</label>
<label id="label293" aria-label="Container Apps Environment">Container Apps Environment</label>
<label id="label50" aria-label="Use quickstart image">Use quickstart image</label>
<label><i></i></label>
<label id="label54" aria-label="Name">Name</label>
<label id="label62" aria-label="Image source">Image source</label>
<label><span id="ChoiceGroupLabel66-acr">Azure Container Registry</label>
<label><span id="ChoiceGroupLabel66-nonAcr">Docker Hub or other registries</label>
<label id="label67" aria-label="Subscription">Subscription</label>
<label id="label71" aria-label="Registry">Registry</label>
<label id="label75" aria-label="Image">Image</label>
<label id="label79" aria-label="Image tag">Image tag</label>
<label id="label83" aria-label="Command override">Command override</label>
<label id="label91" aria-label="Arguments override">Arguments override</label>
<label id="label147" aria-label="Development stack">Development stack</label>
<label id="label261" aria-label="Workload profile">Workload profile</label>
<label id="label343" aria-label="CPU and Memory">CPU and Memory</label>
<label id="TextFieldLabel109">Resource group name</label>


Previously Performed Actions:

[
    {
        "type": "input",
        "transcript": "To begin, let's search for 'Container Apps' in the search bar. Start by typing 'Container Apps' into the search field at the top of the portal.",
        "ariaLabel": "Search resources, services, and docs (G+/)",
        "text": "Container Apps"
    },
    {
        "type": "click",
        "transcript": "Now, let's select 'Container Apps' from the search results to move forward with creating the container app. Click on 'Container Apps' in the list of search results.",
        "ariaLabel": "Container Apps"
    },
    {
        "type": "click",
        "transcript": "Now, let's move forward by clicking the 'Create' button to start setting up your container app. This will take us to the 'Basics' tab where we'll begin entering the necessary details.",
        "ariaLabel": "Create"
    },
    {
        "type": "input",
        "transcript": "Next, we need to enter the name for our container app. Type 'my-container-app' into the 'Container app name' field.",
        "ariaLabel": "Container app name",
        "text": "my-container-app"
    },
    {
        "type": "click",
        "transcript": "Next, let's proceed by selecting 'Create new' to set up a new resource group. This will allow us to group all related resources together.",
        "ariaLabel": "Create new"
    }
]

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