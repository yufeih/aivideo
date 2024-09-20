
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

<input id="checkbox-53" aria-label="Use quickstart image">
<button id="Pivot3-Tab0"> Basics</button>
<button id="Pivot3-Tab1"> Container</button>
<button id="Pivot3-Tab2"> Bindings</button>
<button id="Pivot3-Tab3"> Tags</button>
<button id="Pivot3-Tab4"> Review + create</button>
<button><i></i></button>
<button><span id="id__131">Create</button>
<button><span id="id__134">&lt; Previous</button>
<button>Download a template for automation</button>
<label id="label50" aria-label="Use quickstart image">Use quickstart image</label>
<label><i></i></label>
<label id="label678" aria-label="Quickstart image">Quickstart image</label>
<label id="label682" aria-label="Workload profile type">Workload profile type</label>
<label id="label685" aria-label="Number of CPU cores">Number of CPU cores</label>
<label id="label688" aria-label="Memory size (Gi)">Memory size (Gi)</label>
<label id="label691" aria-label="Ingress">Ingress</label>
<label id="label694" aria-label="Ingress traffic">Ingress traffic</label>
<label id="label697" aria-label="Target port">Target port</label>
<label>Subscription</label>
<label>Resource group</label>
<label>Name</label>
<label>Region</label>
<label>Container Apps Environment</label>
<label>Image source</label>
<label>Image</label>
<label>Workload profile type</label>
<label>Number of CPU cores</label>
<label>Memory size (Gi)</label>
<label>Ingress settings</label>
<label>Port</label>


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
    },
    {
        "type": "input",
        "transcript": "Now, let's create a new resource group. In the 'Name' field, type 'my-container-apps' to group all related resources under this new group.",
        "ariaLabel": "Name",
        "text": "my-container-apps"
    },
    {
        "type": "click",
        "transcript": "Next, we need to choose the deployment source for the container app. Let's select the 'Container image' option under the 'Deployment source' section to specify that we'll be using a container image.",
        "ariaLabel": "Container image"
    },
    {
        "type": "click",
        "transcript": "Next, let's move on by selecting the 'Container' tab to configure the container settings for our app. Click the 'Container' tab at the top of the page.",
        "id": "Pivot3-Tab1"
    },
    {
        "type": "click",
        "transcript": "Next, let's select 'Use quickstart image' to use a pre-built container image for quick deployment. Click the checkbox labeled 'Use quickstart image'.",
        "id": "checkbox-53",
        "ariaLabel": "Use quickstart image"
    },
    {
      "type": "click",
      "transcript": "Next, let's proceed by clicking the 'Review + create' tab to review the configuration settings before deployment. Click the 'Review + create' button at the top.",
      "id": "Pivot3-Tab4"
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