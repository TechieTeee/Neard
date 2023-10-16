// Import necessary Near SDK modules
use near_sdk::{env, near_bindgen, Promise};
use near_sdk::collections::UnorderedMap;

// Define the data structure to store GitHub push events
#[derive(Default, near_sdk::BorshDeserialize, near_sdk::BorshSerialize)]
struct PushEvent {
    repo: String,
    user: String,
    timestamp: u64,
}

#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
struct NeardGitHubReward {
    // Map to store push events
    push_events: UnorderedMap<String, PushEvent>,
}

#[near_bindgen]
impl NeardGitHubReward {
    // Method to record a GitHub push event
    pub fn record_push_event(&mut self, repo: String, user: String) {
        // Get the timestamp of the event
        let timestamp = env::block_timestamp() / 1000000; // Convert nanoseconds to seconds

        // Create a new PushEvent
        let push_event = PushEvent {
            repo,
            user,
            timestamp,
        };

        // Store the push event in the map
        self.push_events.insert(&repo, &push_event);
    }

    // Method to reward a user for a successful push event
    pub fn reward_user(&self, repo: String, user: String) {
        // Check if the push event exists
        if let Some(push_event) = self.push_events.get(&repo) {
            // Check if the user matches the recorded user
            if push_event.user == user {
                // Reward the Neard contributor (this is a simplified example)
                // In a real scenario, you would send tokens or another type of reward
                env::log(format!("Rewarding Neard user {} for repo {}", user, repo).as_bytes());
            }
        }
    }
}

// Entry point for the smart contract
#[cfg(not(target_arch = "wasm32"))]
#[cfg(test)]
mod tests {
}
